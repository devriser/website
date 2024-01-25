/* eslint-disable @next/next/no-img-element */
import "./styles.css";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import countriesData from "./countriesData.json";
import { SearchIcon } from "../form-select/Icons";
import { getLocales } from "../../../../../getLocales";

type Country = {
  country?: string;
  capital?: string[];
  dial_code?: string;
  region?: string;
  flag?: string;
  phoneLength?: string;
};

type Props = {
  labelStyles?: string;
  inputStyles?: string;
  label?: string;
  // defaultCountryCode?: string;
  placeholder?: string;
  defaultValue?: string;
  error?: string;
  required?: boolean;
  validation?: boolean;
  onChange?: ({
    value,
    formattedValue,
    countryCode,
  }: {
    value?: string;
    formattedValue?: string;
    countryCode?: string;
  }) => void;
  params?: any;
};

export default function CustomPhoneInput({
  // defaultCountryCode = "United States of America",
  defaultValue,
  labelStyles,
  inputStyles,
  placeholder,
  label,
  error,
  validation = true,
  required = validation,
  onChange = ({ value, countryCode, formattedValue }) => {},
  params,
}: Props) {
  const dropDownNode = useRef<HTMLDivElement>(null);

  const [show, setShow] = useState<boolean>(false);

  const [searchedCountry, setSearchedCountry] = useState<string>("");

  const [fieldError, setFieldError] = useState(!validation ? error : "");

  const getDefaultCountryCode = () => {
    switch (params.lang) {
      case "en":
        return "United States of America";
      case "fr":
        return "France";
      case "ar":
        return "Saudi Arabia"; // Default to Dubai for Arabic
      case "cn":
        return "China"; // Default to Dubai for Arabic
      default:
        return "United States of America"; // Default to a fallback value
    }
  };
  const [defaultCountryCode, setDefaultCountryCode] = useState<string>(
    getDefaultCountryCode()
  );

  useEffect(() => {
    if (show) {
      const handleDomClick = (e: any) => {
        e.stopPropagation();
        if (
          !dropDownNode.current?.contains(e.target) &&
          e.target !== dropDownNode.current
        ) {
          setShow(false);
        }
      };

      document.addEventListener("click", handleDomClick);
      return () => {
        document.removeEventListener("click", handleDomClick);
      };
    }
  }, [show]);

  useEffect(() => {
    // Update defaultCountryCode if params.lang changes
    setDefaultCountryCode(getDefaultCountryCode());
  }, [params.lang]);

  const filterCountriesData = searchedCountry
    ? countriesData.filter((country) =>
        country.country.toLowerCase().includes(searchedCountry.toLowerCase())
      )
    : countriesData;

  useEffect(() => {
    setFieldError(error);
  }, [error]);

  const defaultCountryData = countriesData.find(
    (country) => country.country === defaultCountryCode
  );

  const [selectedValues, setSelectedValues] = useState<Country>({
    dial_code: defaultCountryData?.dial_code,

    flag: defaultCountryData?.flag,
    phoneLength: defaultCountryData?.phoneLength,
  });

  const selectCountry = (country: Country) => {
    setShow((prev) => !prev);
    setSelectedValues({
      dial_code: country?.dial_code,
      flag: country.flag,
      phoneLength: country.phoneLength,
    });
  };

  function validateField(e: string) {
    if (e.length) {
      if (e.length < Number(selectedValues?.phoneLength)) {
        return setFieldError("Number is not valid");
      }
      if (/^[-+]?\d+$/.test(e)) return setFieldError("");
    }
    return setFieldError("");
  }

  return (
    <div ref={dropDownNode} className="phone_library ">
      <div>
        {label && (
          <>
            <p className="font-medium">{label}</p>
            {required && <span className="text-red-500"></span>}
          </>
        )}
      </div>
      <div className="phone_input-container !bg-primary" id={labelStyles}>
        {show && (
          <div className="flag_dropDown !bg-primary">
            <label className="flag_dropDown-searchbar !bg-primary !border-b !border-b-secondary-reverse ">
              <SearchIcon />
              <input
                type="search"
                placeholder="Search country"
                className="!bg-primary "
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setSearchedCountry(e.target.value)
                }
                autoFocus
              />
            </label>

            {filterCountriesData.map((country, i) => (
              <div
                onClick={() => selectCountry(country)}
                key={country.country}
                className="hover:bg-light-secondary-two"
              >
                <img
                  src={country.flag}
                  alt="country_flag"
                  width={"28"}
                  height={"25"}
                />
                <span>{country.country}</span>
              </div>
            ))}
          </div>
        )}
        <div
          className="flag_container !border-r !border-secondary-reverse"
          onClick={() => setShow((prev) => !prev)}
        >
          <img
            src={selectedValues.flag as string}
            alt="selected_flag"
            width={"32"}
            height={"32"}
          />
          <span>{selectedValues.dial_code}</span>
        </div>
        <input
          onBlur={(e) => validation && validateField(e.target.value)}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            onChange({
              value: e.target.value,
              countryCode: selectedValues.dial_code,
              formattedValue: `${selectedValues?.dial_code}-${e.target.value}`,
            });
          }}
          onInput={(e: ChangeEvent<HTMLInputElement>) => {
            const numericValue = e.target.value.replace(/\D/g, "");
            e.target.value = numericValue;
            onChange({
              value: numericValue,
              countryCode: selectedValues.dial_code,
              formattedValue: `${selectedValues?.dial_code}-${numericValue}`,
            });
          }}
          id={inputStyles}
          defaultValue={defaultValue}
          className="input !bg-primary  "
          type="text"
          placeholder={placeholder}
          maxLength={Number(selectedValues?.phoneLength)}
          required={required}
          pattern="[0-9]*"
        />
      </div>
      {fieldError && <span className="error_phone_input">{fieldError}</span>}
    </div>
  );
}
