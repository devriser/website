"use client";

import { FieldError } from "react-hook-form";
import { ArrowIcon, CloseIcon, SearchIcon } from "./Icons";
import styles from "./select.module.css";
import { useEffect, useMemo, useRef, useState } from "react";
// import cn from "@/utils/cn";

type SelectProps = {
  label?: string;
  placeholder?: string;
  error?: FieldError;
  options: unknown[];
  onChange: (value: any) => void;
  values: unknown;
  displayKey?: string;
  uniqueKey?: string;
  returnKey?: string;
  multiple?: boolean;
  searchable?: boolean;
  keepOpen?: boolean;
  isOpen?: boolean;
  required?: boolean;
  showSelectedOptions?: boolean;
  isTableOn?: boolean;
  labelColumn?: boolean;
};

export default function Select({
  label,
  placeholder,
  error,
  options,
  multiple = false,
  values,
  uniqueKey,
  displayKey,
  returnKey,
  searchable = false,
  keepOpen = false,
  isOpen = false,
  showSelectedOptions = false,
  required,
  onChange,
  isTableOn,
  labelColumn,
}: SelectProps) {
  const [dropdown, setDropdown] = useState(isOpen);
  const [search, setSearch] = useState<string>("");

  const convertedDefault = values
    ? Array.isArray(values)
      ? values
      : [values]
    : [];

  const defaultState = returnKey
    ? options?.filter((option: any) =>
        convertedDefault.find(
          (defaultOption) =>
            option[returnKey] === (defaultOption[returnKey] || defaultOption)
        )
      )
    : convertedDefault;

  const optionValues = useMemo(() => {
    if (showSelectedOptions) return options;
    else {
      return options?.filter(
        (option: any) =>
          !defaultState?.find(
            (value) => JSON.stringify(value) === JSON.stringify(option)
          )
      );
    }
  }, [options, defaultState, showSelectedOptions]);

  const filteredValues = useMemo(
    () =>
      search
        ? optionValues.filter((ele: any) =>
            displayKey
              ? ele[displayKey]?.toLowerCase().includes(search?.toLowerCase())
              : ele?.toLowerCase().includes(search?.toLowerCase())
          )
        : optionValues,
    [displayKey, optionValues, search]
  );

  const returnSelectedValue = (values: any[]) => {
    if (multiple) {
      if (returnKey) {
        return values.map((ele) => ele?.[returnKey]);
      } else return values;
    } else {
      if (returnKey) {
        return values[0]?.[returnKey];
      } else {
        return values[0];
      }
    }
  };

  const handleChange = (selectedValue: any) => {
    let newValue = multiple
      ? [...defaultState, selectedValue]
      : [selectedValue];
    onChange(returnSelectedValue(newValue));
  };

  const handleRemove = (removedValued: unknown, event?: Event) => {
    event?.stopPropagation();
    const newValue = defaultState.filter((ele) => ele !== removedValued);
    onChange(returnSelectedValue(newValue));
  };

  const handleClearAll = (e: any) => {
    e.stopPropagation();
    onChange(returnSelectedValue([]));
  };

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dropdown) {
      const handleClose = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setDropdown(false);
        }
      };

      const handleDomClick = (e: any) => {
        if (
          !dropdownRef.current?.contains(e?.target) &&
          e.target !== dropdownRef.current
        ) {
          setDropdown(false);
        }
      };

      document.addEventListener("click", handleDomClick);
      document.addEventListener("keydown", handleClose);
      return () => {
        document.removeEventListener("keydown", handleClose);
        document.removeEventListener("click", handleDomClick);
      };
    }
  }, [dropdown]);

  return (
    <label
      className={`${styles.dropdown} ${
        labelColumn ? "flex-col !items-start " : ""
      } max-sm:flex-col  max-sm:items-start`}
    >
      {isTableOn ? (
        ""
      ) : (
        <p
          className={` ${
            isTableOn ? "flex-[0] ps-0" : "flex-1"
          } whitespace-nowrap font-medium text-secondary-reverse max-sm:text-start`}
        >
          {label}
        </p>
      )}
      <div
        className={styles.select}
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setDropdown(true)}
        onClick={() => setDropdown((prev) => !prev)}
      >
        <div className={`${styles.selected} !bg-primary`}>
          {defaultState?.length > 0 ? (
            <div className={styles.selected_values_list}>
              {defaultState?.map((ele: any) => (
                <div
                  tabIndex={0}
                  onKeyDown={(e) => {
                    e.key === "Enter" && handleRemove(ele);
                    e.stopPropagation();
                  }}
                  key={
                    uniqueKey ? `selected-${ele[uniqueKey]}` : `selected-${ele}`
                  }
                  className={
                    multiple ? styles.selected_values_wrapper : "!bg-primary"
                  }
                >
                  <span className={"whitespace-nowrap !bg-primary"}>
                    {displayKey ? ele[displayKey] : ele}
                    {required && (
                      <div className="absolute bottom-0 left-[12px] top-[25%]  h-[50%] w-[2px] rounded bg-red-500"></div>
                    )}
                  </span>
                  {multiple && (
                    <div
                      className={styles.remove_value}
                      onClick={(event: any) => {
                        multiple ? handleRemove(ele, event) : null;
                      }}
                    >
                      <CloseIcon />
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div>
              <p
                className={`${styles.options_label} whitespace-nowrap ps-[15px] text-gray-400`}
              >
                {placeholder}
              </p>
              {required && (
                <div className="absolute bottom-0 left-[12px] top-[25%]  h-[50%] w-[2px] rounded bg-red-500"></div>
              )}
            </div>
          )}
          <div className={styles.actions} title="Clear all values">
            <div className={defaultState.length > 0 ? "block" : "hidden"}>
              {/* <div className={styles.clear_all} onClick={handleClearAll}>
                <CloseIcon />
              </div> */}
            </div>
            <div className={styles.arrow}>
              <ArrowIcon direction={dropdown ? "left" : "right"} />
            </div>
          </div>
        </div>

        {dropdown && (
          <div
            id="dropdown"
            className={`${styles.options} !bg-primary hover:bg-secondary`}
            tabIndex={0}
            ref={dropdownRef}
          >
            {searchable && (
              <div
                className={styles.search}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <SearchIcon />
                <input
                  type="search"
                  value={search}
                  onBlur={(e) => e.stopPropagation()}
                  onChange={(e) => setSearch(e.target.value)}
                  autoFocus
                  placeholder="Search..."
                  className={`${styles.search_input} !bg-primary !w-full`}
                />
              </div>
            )}
            {filteredValues?.length > 0 ? (
              <ul className={`${styles.option_list} `}>
                {filteredValues?.map((ele: any) => (
                  <li
                    tabIndex={0}
                    key={
                      uniqueKey ? `options-${ele[uniqueKey]}` : `options-${ele}`
                    }
                    onClick={(e) => {
                      keepOpen && e.stopPropagation();
                      handleChange(ele);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleChange(ele);
                        e.stopPropagation();
                      }
                    }}
                    className={` ${
                      showSelectedOptions
                        ? defaultState?.length > 0
                          ? defaultState.find((selectedValue) =>
                              displayKey
                                ? selectedValue[displayKey] === ele[displayKey]
                                : selectedValue === ele
                            )
                            ? styles.option_selected
                            : styles.option
                          : styles.option
                        : styles.option
                    } hover:bg-secondary
                    `}
                  >
                    {displayKey ? ele[displayKey] : ele}
                  </li>
                ))}
              </ul>
            ) : (
              <p
                className={`${styles.option} `}
                onClick={(e) => e.stopPropagation()}
              >
                No items left...
              </p>
            )}
          </div>
        )}
      </div>
      {error && (
        <span className="font-regular text-[12px] text-red-500">
          {label} is required
        </span>
      )}
    </label>
  );
}
