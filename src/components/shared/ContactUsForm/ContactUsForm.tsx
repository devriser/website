"use client";

import React, { useState } from "react";
import FormInput from "../FormComponents/formInput/FormInput";
import CustomPhoneInput from "../FormComponents/phone-input/CustomPhoneInput";
import Select from "../FormComponents/form-select/Select";
import { countriesNameData } from "./countriesNameData";
import RadioButton from "../FormComponents/RadioButton";
import FileIcon from "./FileIcon";
import Button from "../Button";
import {
  CallIconContact,
  InqueryIcon,
  MailIconContact,
  SkypeIcon,
} from "@/assets/svg/ContactUsSvg";

export default function ContactUsForm() {
  const [active, setActive] = useState(null);
  const [budgetActive, setBudgetActive] = useState(null);
  const [selectedRadio1, setSelectedRadio1] = useState<number>(1);

  const projectType = [
    {
      name: "Website",
    },
    {
      name: "Mobile Application",
    },
    {
      name: "Game Development",
    },
    {
      name: "Blockchain",
    },
    {
      name: "UI & UX Design",
    },
    {
      name: "AI & ML",
    },
    {
      name: "Cloud Computing",
    },
    {
      name: "Internet of Things",
    },
    {
      name: "Enterprise Solutions",
    },
  ];

  const budget = [
    {
      name: "I don’t know yet",
    },
    {
      name: "$10-$20k",
    },
    {
      name: "$30-$40k",
    },
    {
      name: "$40-$50k",
    },
    {
      name: "$50-$100k",
    },
    {
      name: ">$100K",
    },
  ];

  const radioTextArr1 = [
    { id: 1, label: "Design & Development" },
    {
      id: 2,
      label:
        "Design Only (We designing your product, you will develop yourself)",
    },
    {
      id: 3,
      label:
        "Development Only (We Developing Web & App, you provide us with designs)",
    },
  ];

  const progressArr = [
    {
      number: "1",
      heading: "Get a comprehensive free technical consultation.",
      subHeading:
        "Following a discussion of your project, we will provide you with a full technical consultation regarding the technology stack we employ and which technology would be most suited for your project.",
    },
    {
      number: "2",
      heading:
        "We will provide you an all-inclusive proposal paper for your Project.",
      subHeading:
        "We will provide you an all-inclusive proposal document that includes all of the features, timetable, pricing, and smallest details related to your project after we have a firm hold on it.",
    },
    {
      number: "3",
      heading:
        "We will provide you an all-inclusive proposal paper for your Project.",
      subHeading:
        "Once you've approved the proposal and given us the go-ahead for the project, we'll assemble an all-star team to realize your vision and go above and beyond your expectations.",
    },
  ];

  const socialLinksArr = [
    {
      icon: <MailIconContact />,
      heading: "Sales & Marketing",
      subHeading1: "hello@devriser.com",
      subHeading2: "",
    },
    {
      icon: <SkypeIcon />,
      heading: "Skype",
      subHeading1: "Devriser",
      subHeading2: "",
    },
    {
      icon: <InqueryIcon />,
      heading: "HR Inquiry",
      subHeading1: "hr@devriser.com",
      subHeading2: "+1 123-123-1212 (US)",
    },
    {
      icon: <CallIconContact />,
      heading: "Sales Inquiry",
      subHeading1: "+1 123-123-1212 (US)",
      subHeading2: "+1 123-123-1212 (US)",
    },
  ];

  const handleProjectClick = (index: any) => {
    setActive(index === active ? null : index);
  };
  const handleBudgetClick = (index: any) => {
    setBudgetActive(index === budgetActive ? null : index);
  };

  const handleRadioChange1 = (id: any) => {
    setSelectedRadio1(id);
  };

  return (
    <div className="flex flex-col gap-8 pb-8">
      <div className="flex gap-8">
        <form className="flex flex-col gap-8 flex-[2]">
          <div className="bg-secondary p-5 flex flex-col gap-4 ">
            <p className="text-text-title font-medium">
              1. Personal Information
            </p>
            <div className="flex flex-col  gap-2">
              <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
                <FormInput label="Full Name" labelColumn />
                <FormInput label="Email" labelColumn />
              </div>
              <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
                <CustomPhoneInput label="Phone Number" />
                <Select
                  label="Country"
                  options={countriesNameData}
                  values={() => {}}
                  onChange={() => {}}
                  labelColumn
                  searchable
                />
              </div>
            </div>
          </div>
          <div className="bg-secondary p-5 flex flex-col gap-4">
            <p className="text-text-title font-medium">
              2. What is your next project about?*
            </p>
            <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1 max-lg:grid-cols-2">
              {projectType.map((project, index) => (
                <div
                  key={project.name}
                  className={`flex p-4 justify-center cursor-pointer ${
                    index === active
                      ? "bg-solid-blue text-primary"
                      : "bg-primary"
                  }`}
                  onClick={() => handleProjectClick(index)}
                >
                  <span>{project.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-secondary p-5 flex flex-col gap-4">
            <p className="text-text-title font-medium">
              3. What will be our involvement in your project?*
            </p>
            <div className="flex flex-col gap-4">
              {radioTextArr1.map(
                ({ id, label }: { id: number; label: string }, index) => (
                  <RadioButton
                    key={`rule-${id}`}
                    id={id}
                    checked={selectedRadio1 === id}
                    onChange={() => handleRadioChange1(id)}
                    label={label}
                    name={`rule-${id}`}
                  />
                )
              )}
            </div>
          </div>
          <div className="bg-secondary p-5 flex flex-col gap-4">
            <p className="text-text-title font-medium">
              4. What is your approximate budget (in USD)?*
            </p>
            <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1 max-lg:grid-cols-2">
              {budget.map((budget, index) => (
                <div
                  key={budget.name}
                  className={`flex p-4 justify-center cursor-pointer ${
                    index === budgetActive
                      ? "bg-solid-blue text-primary"
                      : "bg-primary"
                  }`}
                  onClick={() => handleBudgetClick(index)}
                >
                  <span>{budget.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-secondary p-5 flex flex-col gap-4">
            <p className="text-text-title font-medium">
              5. Tell us about your project
            </p>
            <div>
              <FormInput
                inputType="textarea"
                placeHolder="Describe your project"
                labelColumn
                row={4}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="cursor-pointer">
                <div className="bg-primary rounded flex  p-1 py-2 cursor-pointer ps-4 gap-2">
                  <input
                    type="file"
                    hidden
                    accept=".pdf, .doc, .docx"
                    // {...register("file", {
                    //   onChange: (e: ChangeEvent<HTMLInputElement>) => {
                    //     if (e.target.files) {
                    //       clearErrors("file");
                    //       if (e?.target?.files[0].size < 10000000)
                    //         setValue("file", e.target.files[0]);
                    //       else {
                    //         resetField("file");
                    //         setError("file", {
                    //           type: "custom",
                    //           message: "File Size is Greater than 10 mb",
                    //         });
                    //       }
                    //     }
                    //   },
                    // })}
                  />
                  <div className="flex flex-col ">
                    <FileIcon />
                    {/* <div>
                  <p>Attach File:- Max (10MB)</p>
                  <span>Selected File - {file && file?.name}</span>
                </div> */}
                  </div>
                  <div>
                    <p className="ps-[3px] text-secondary-reverse">
                      Upload Document
                    </p>
                    <p className="ps-[3px] text-secondary-reverse">
                      Drag and drop or browse your file
                    </p>
                  </div>
                  {/* <span>{errors?.file?.message}</span> */}
                </div>
              </label>
            </div>
            <div className="flex justify-end">
              <Button variant="success" style="solid">
                Submit
              </Button>
            </div>
          </div>
        </form>
        <div className="flex-1 flex flex-col justify-between max-md:hidden">
          {progressArr.map((item, index) => (
            <div key={index} className="flex gap-3  relative h-full ">
              <p className="bg-blue-gradient p-2 px-3 text-white flex items-center font-medium h-fit z-20">
                {item.number}
              </p>
              {index < progressArr.length - 1 && (
                <div className="absolute top-0 h-full left-4  z-10 w-[2px] bg-solid-blue translate-x-[-50%]"></div>
              )}
              <div className="flex flex-col whitespace-pre-wrap">
                <p className=" font-medium">{item.heading}</p>
                <p className="">{item.subHeading}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-8 justify-center max-md:grid-cols-1 max-lg:grid-cols-2">
        {socialLinksArr.map((item, index) => (
          <div key={index} className="flex gap-4 bg-secondary p-3 items-center">
            {item.icon}

            <div>
              <p className="font-medium first-letter:">{item.heading}</p>
              <p>{item.subHeading1}</p>
              <p>{item.subHeading2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
