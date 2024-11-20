"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CheckboxFive from "@/components/FormElements/Checkboxes/CheckboxFive";
import CheckboxFour from "@/components/FormElements/Checkboxes/CheckboxFour";
import CheckboxOne from "@/components/FormElements/Checkboxes/CheckboxOne";
import CheckboxThree from "@/components/FormElements/Checkboxes/CheckboxThree";
import CheckboxTwo from "@/components/FormElements/Checkboxes/CheckboxTwo";
import SwitcherFour from "@/components/FormElements/Switchers/SwitcherFour";
import SwitcherOne from "@/components/FormElements/Switchers/SwitcherOne";
import SwitcherThree from "@/components/FormElements/Switchers/SwitcherThree";
import SwitcherTwo from "@/components/FormElements/Switchers/SwitcherTwo";
import DatePickerTwo from "@/components/FormElements/DatePicker/DatePickerTwo";
import DatePickerOne from "@/components/FormElements/DatePicker/DatePickerOne";
import MultiSelect from "@/components/FormElements/MultiSelect";
import VisibiltySelect from "@/components/FormElements/SelectGroup/StatusSelect";
import ButtonDefault from "@/components/Buttons/ButtonDefault";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import QuillTextEditor from "@/components/QuillTextEditor";


  const addNewPost = () => {
    return (

      <>
      <DefaultLayout>
        <Breadcrumb pageName="Add a new Post" />

        <div className="grid grid-cols-1 gap-9 sm:grid-cols-[4fr_2fr]">
          <div className="flex flex-col gap-9">
            
              <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
                  <h3 className="font-medium text-dark dark:text-white">
                    Details
                  </h3>
                </div>
                <div className="flex flex-col gap-6 p-6.5">
                  <div>
                    <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                      Blog Title
                    </label>
                    <input
                      type="text"
                      placeholder="Add title"
                      className="w-full rounded-[7px] border-[1.5px] border-primary bg-transparent px-5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:bg-dark-2 dark:text-white"
                    />
                    
                  </div>
                  <div>
                    {/* <textarea
                      rows={12}
                      placeholder="Start Writing..."
                      className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                    ></textarea> */}
                    <QuillTextEditor />
                  </div>
                </div>
              </div>
                          {/* <!-- File upload --> */}
            <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
              <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
                <h3 className="font-medium text-dark dark:text-white">
                  Add Thumbnail
                </h3>
              </div>
              <div className="flex flex-col gap-5.5 p-6.5">
                <div>
                  <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                    Attach file
                  </label>
                  <input
                    type="file"
                    className="w-full cursor-pointer rounded-[7px] border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-[#E2E8F0] file:px-6.5 file:py-[13px] file:text-body-sm file:font-medium file:text-dark-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-dark dark:border-dark-3 dark:bg-dark-2 dark:file:border-dark-3 dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                  />
                </div>

              </div>
            </div>
              <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
                  <h3 className="font-medium text-dark dark:text-white">
                    Publish
                  </h3>
                </div>
                <div className="flex flex-row gap-5.5 p-6.5 justify-between">
                  <ButtonDefault
                    label="Save Draft"
                    link="/"
                    customClasses="border border-primary text-primary rounded-[5px] px-3 py-1.5 lg:px-8 xl:px-10"
                  />
                  <ButtonDefault
                    label="Preview"
                    link="/"
                    customClasses="border border-dark text-dark rounded-[5px] px-3 py-1.5 lg:px-8 xl:px-10"
                  />
                </div>
                <div className="flex flex-col gap-5.5 px-6.5">
                  <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white flex gap-1 items-center">
                    Status: <b>Draft</b> <VisibiltySelect />
                  </label>
                  <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                    Visibility: <b>Public</b> 
                  </label>
                  <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white flex gap-10">
                    Private  <SwitcherTwo /> Public 
                  </label>

                </div>
                <div className="border-t border-stroke px-6.5 py-4 dark:border-dark-3 flex">
                <ButtonDefault
                  label="Update"
                  link="/"
                  customClasses="bg-primary text-white rounded-[5px] px-10 py-3.5 lg:px-8 xl:px-10 ml-auto"
                />
                </div>
              </div>
          </div>

          <div className="flex flex-col gap-9">

              {/* <!-- Checkbox and radio --> */}
              <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
                  <h3 className="font-medium text-dark dark:text-white">Add Categories</h3>
                </div>
                <div className="flex flex-col gap-5.5 p-6.5">
                  <ul className="categoryCheckList max-h-64 overflow-y-auto scrollbar scrollbar-thin ">
                    <li>
                      <CheckboxTwo label="Category 1" />
                    </li>
                    <li>
                      <CheckboxTwo label="Category 2" />
                      <ul className="subCategory">
                        <li><CheckboxTwo label="Subcategory 2.1" /></li>
                        <li><CheckboxTwo label="Subcategory 2.2" /></li>
                        <li><CheckboxTwo label="Subcategory 2.3" /></li>
                      </ul>
                    </li>
                    <li>
                      <CheckboxTwo label="Category 3" />
                    </li>
                    <li>
                      <CheckboxTwo label="Category 4" />
                    </li>
                    <li>
                      <CheckboxTwo label="Category 5" />
                      <ul className="subCategory">
                        <li><CheckboxTwo label="Subcategory 5.1" /></li>
                        <li><CheckboxTwo label="Subcategory 5.2" /></li>
                        <li><CheckboxTwo label="Subcategory 5.3" /></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>


              {/* <!-- Select input --> */}
              <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">

                  <h3 className="font-medium text-dark dark:text-white">
                    Tags
                  </h3>
                </div>

                <div className="flex flex-col lg:flex-row xl:flex-row gap-2.5 p-3.5">
                  <input
                    type="text"
                    placeholder="Default Input"
                    className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-1.5 py-1 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                  />
                    <ButtonDefault
                      label="Add"
                      link="/"
                      customClasses="border border-primary text-primary rounded-[5px] lg:px-3 xl:px-8"
                    />

                </div>
              </div>
          </div>

        </div>
        </DefaultLayout>
      </>
    );
  };

export default addNewPost;