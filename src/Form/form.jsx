import React, { useState } from "react";
import "./form.css";
import { FiUpload } from "react-icons/fi";
function Form() {
  const [mcq, setmcq] = useState(false);
  const [checkbox, setcheckbox] = useState(false);
  const [Short, setshort] = useState(false);
  const [para, setpara] = useState(false);
  const [drop, setdrop] = useState(false);
  const [file, setfile] = useState(false);
  const [linear, setlinear] = useState(false);
  const [multi, setmulti] = useState(false);
  const [tick, settick] = useState(false);

  return (
    <div className=" flex  flex-col items-center">
      <div className="main mt-4">
        <div className="w-full h-max bg-white rounded-lg mb-4">
          <div
            style={{ borderRadius: "10px 10px 0 0", height: "10px" }}
            className=" bg-violet-700"
          ></div>
          <div className=" p-4">
            <h2 className=" text-4xl mb-4 text-slate-900">Assignment Task</h2>
          </div>
          <hr />
          <div className=" p-4">
            <h2 className=" font-medium text-slate-500">
              abc@gmail.com{" "}
              <span className=" text-sky-600">Switch accounts</span>
            </h2>
            <h2 className=" text-base mt-4 text-slate-700">
              The name and photo associated with your Google Account will be
              recorded when you upload files and submit this form. Your email
              address is not part of your response.
            </h2>
          </div>
          <hr />
          <div className=" p-4">
            <h2 className=" text-red-600">* Indicates required question</h2>
          </div>
        </div>
        <div className="mcq w-full h-max bg-white rounded-lg">
          <div className=" flex flex-col p-6 ">
            <h2>MCQ</h2>
            <div className=" flex  items-center p-2 pl-0">
              <input
                id="o1"
                name="mcq"
                type="radio"
                className=" accent-indigo-500 h-5 w-5"
              />
              <label htmlFor="o1" className=" ml-3">
                Option 1
              </label>
            </div>
            <div className=" flex items-center p-2 pl-0">
              <input
                id="o2"
                className=" accent-indigo-500 h-5 w-5"
                name="mcq"
                type="radio"
              />
              <label htmlFor="o2" className=" ml-3">
                Option 2
              </label>
            </div>
            <div className="flex  items-center p-2 pl-0">
              <input
                id="o3"
                name="mcq"
                type="radio"
                className=" accent-indigo-500 h-5 w-5"
              />
              <label htmlFor="o3" className=" ml-3">
                Option 3
              </label>
            </div>
          </div>
        </div>
        <div className="mcq w-full h-max bg-white rounded-lg mt-4 ">
          <div className=" flex flex-col p-6 ">
            <h2>Checkbox</h2>
            <div className=" flex  items-center p-2 pl-0">
              <input
                id="o1"
                name="mcq"
                type="checkbox"
                className=" accent-indigo-500 h-5 w-5"
              />
              <label htmlFor="o1" className=" ml-3">
                Option 1
              </label>
            </div>
            <div className=" flex items-center p-2 pl-0">
              <input
                id="o2"
                className=" accent-indigo-500 h-5 w-5"
                name="mcq"
                type="checkbox"
              />
              <label htmlFor="o2" className=" ml-3">
                Option 2
              </label>
            </div>
            <div className="flex  items-center p-2 pl-0">
              <input
                id="o3"
                name="mcq"
                type="checkbox"
                className=" accent-indigo-500 h-5 w-5"
              />
              <label htmlFor="o3" className=" ml-3">
                Option 3
              </label>
            </div>
          </div>
        </div>
        <div className="mcq w-full h-max bg-white rounded-lg mt-4 ">
          <div className=" flex flex-col p-6  ">
            <h2 className=" mb-4">Short Answer</h2>
            <input
              type="text"
              placeholder="Your answer"
              className=" text-slate-600 outline-none w-1/2 border-b-2 focus:border-b-violet-600 transition ease-in duration-400"
            />
          </div>
        </div>
        <div className="mcq w-full h-max bg-white rounded-lg mt-4 ">
          <div className=" flex flex-col p-6  ">
            <h2 className=" mb-4">ParaGraph</h2>
            <input
              type="text"
              placeholder="Your answer"
              className=" text-slate-600 outline-none w-full border-b-2  focus:border-b-violet-600 transition ease-in duration-400"
            />
          </div>
        </div>
        <div className="mcq w-full h-max bg-white rounded-lg mt-4 ">
          <div className=" flex flex-col p-6  ">
            <h2 className=" mb-4">ParaGraph</h2>
            <select
              name="fgf"
              id=""
              className="dropdown "
              autoComplete="off"
              onfocus="this.size=4;"
              onblur="this.size=0;"
              onchange="this.size=1; this.blur();"
            >
              <option
                value="1"
                selected
                disabled
                className=" focus:bg-slate-400"
              >
                Choose
              </option>
              <option value="2" className=" h-6 p-2 hover:bg-slate-400">
                Meow
              </option>
              <option value="3" className=" hover:bg-slate-400">
                hello
              </option>
            </select>
          </div>
        </div>
        <div className="mcq w-full h-max bg-white rounded-lg mt-4 ">
          <div className=" flex flex-col p-6  ">
            <h2 className=" mb-4">File Upload</h2>
            <input
              type="file"
              id="file"
              placeholder="Your answer"
              className=" text-slate-600 outline-none w-full border-b-2 hidden "
            />
            <label htmlFor="file" className="file p-2 w-1/3">
              <div className=" font-medium text-sky-600 flex items-center">
                <FiUpload color="#0c86cc" size={"1.1rem"} className=" mr-2" />
                Add File
              </div>
            </label>
          </div>
        </div>
        <div className="mcq w-full h-max bg-white rounded-lg mt-4">
          <div className=" flex flex-col p-6 ">
            <h2>Linear Scale</h2>
            <div className=" flex justify-center relative">
              <h2 className=" absolute bottom-0 left-8 w-max">Worst</h2>
              <div className=" flex justify-between w-3/5">
                <div className=" flex flex-col justify-between items-center p-2 pl-0 h-20  ">
                  <label htmlFor="o1" className=" ">
                    1
                  </label>
                  <input
                    id="o1"
                    name="mcq"
                    type="radio"
                    className=" accent-indigo-500 h-5 w-5"
                  />
                </div>
                <div className=" flex flex-col justify-between items-center p-2 pl-0 h-20 ">
                  <label htmlFor="o1" className=" ">
                    2
                  </label>
                  <input
                    id="o1"
                    name="mcq"
                    type="radio"
                    className=" accent-indigo-500 h-5 w-5"
                  />
                </div>
                <div className=" flex flex-col justify-between items-center p-2 pl-0 h-20 ">
                  <label htmlFor="o1" className=" ">
                    3
                  </label>
                  <input
                    id="o1"
                    name="mcq"
                    type="radio"
                    className=" accent-indigo-500 h-5 w-5"
                  />
                </div>
                <div className="flex flex-col justify-between items-center p-2 pl-0 h-20 ">
                  <label htmlFor="o1" className=" ">
                    4
                  </label>
                  <input
                    id="o1"
                    name="mcq"
                    type="radio"
                    className=" accent-indigo-500 h-5 w-5"
                  />
                </div>
                <div className="flex flex-col justify-between items-center p-2 pl-0 h-20 mx-2 ">
                  <label htmlFor="o1" className=" ">
                    5
                  </label>
                  <input
                    id="o1"
                    name="mcq"
                    type="radio"
                    className=" accent-indigo-500 h-5 w-5"
                  />
                </div>
              </div>

              <h2 className=" absolute bottom-0 right-12">Best</h2>
            </div>
          </div>
        </div>

        {/* Multi choice grid */}
        <div className="mcq w-full h-max bg-white rounded-lg mt-4">
          <div className=" flex flex-col p-6 ">
            <h2>Multi choice Grid</h2>
            <div className=" flex justify-between  px-2 py-3 ">
              <div className=" w-1/4">
                <h2></h2>
              </div>
              <div className="w-1/4 flex justify-center">Column1</div>
              <div className="w-1/4 flex justify-center">Column2</div>
              <div className="w-1/4 flex justify-center">Column3</div>
            </div>
            <div className=" flex justify-between  px-2 py-3   bg-slate-100">
              <div className=" w-1/4">
                <h2>Row1</h2>
              </div>
              <div className="w-1/4 flex justify-center">
                <input
                  id="o1"
                  name="mcq"
                  type="radio"
                  className=" accent-indigo-500 h-5 w-5"
                />
              </div>
              <div className="w-1/4 flex justify-center">
                <input
                  id="o1"
                  name="mcq"
                  type="radio"
                  className=" accent-indigo-500 h-5 w-5"
                />
              </div>
              <div className="w-1/4 flex justify-center">
                <input
                  id="o1"
                  name="mcq"
                  type="radio"
                  className=" accent-indigo-500 h-5 w-5"
                />
              </div>
            </div>
            <div className=" flex justify-between   px-2 py-3 bg-slate-100 mt-1">
              <div className=" w-1/4">
                <h2>Row2</h2>
              </div>
              <div className="w-1/4 flex justify-center">
                <input
                  id="o1"
                  name="mcq"
                  type="radio"
                  className=" accent-indigo-500 h-5 w-5"
                />
              </div>
              <div className="w-1/4 flex justify-center">
                <input
                  id="o1"
                  name="mcq"
                  type="radio"
                  className=" accent-indigo-500 h-5 w-5"
                />
              </div>
              <div className="w-1/4 flex justify-center">
                <input
                  id="o1"
                  name="mcq"
                  type="radio"
                  className=" accent-indigo-500 h-5 w-5"
                />
              </div>
            </div>
            <div className=" flex justify-between  px-2 py-3 bg-slate-100 mt-1">
              <div className=" w-1/4">
                <h2>Row3</h2>
              </div>
              <div className="w-1/4 flex justify-center">
                <input
                  id="o1"
                  name="mcq"
                  type="radio"
                  className=" accent-indigo-500 h-5 w-5"
                />
              </div>
              <div className="w-1/4 flex justify-center">
                <input
                  id="o1"
                  name="mcq"
                  type="radio"
                  className=" accent-indigo-500 h-5 w-5"
                />
              </div>
              <div className="w-1/4 flex justify-center">
                <input
                  id="o1"
                  name="mcq"
                  type="radio"
                  className=" accent-indigo-500 h-5 w-5"
                />
              </div>
            </div>
          </div>
        </div>
        {/*Tick box grid */}
        <div className="mcq w-full h-max bg-white rounded-lg mt-4">
          <div className=" flex flex-col p-6 ">
            <h2>Tick box Grid</h2>
            <div className=" flex justify-between  px-2 py-3 ">
              <div className=" w-1/4">
                <h2></h2>
              </div>
              <div className="w-1/4 flex justify-center">Column1</div>
              <div className="w-1/4 flex justify-center">Column2</div>
              <div className="w-1/4 flex justify-center">Column3</div>
            </div>
            <div className=" flex justify-between  px-2 py-3   bg-slate-100">
              <div className=" w-1/4">
                <h2>Row1</h2>
              </div>
              <div className="w-1/4 flex justify-center">
                <input
                  id="o1"
                  name="mcq"
                  type="checkbox"
                  className=" accent-indigo-500 h-5 w-5"
                />
              </div>
              <div className="w-1/4 flex justify-center">
                <input
                  id="o1"
                  name="mcq"
                  type="checkbox"
                  className=" accent-indigo-500 h-5 w-5"
                />
              </div>
              <div className="w-1/4 flex justify-center">
                <input
                  id="o1"
                  name="mcq"
                  type="checkbox"
                  className=" accent-indigo-500 h-5 w-5"
                />
              </div>
            </div>
            <div className=" flex justify-between   px-2 py-3 bg-slate-100 mt-1">
              <div className=" w-1/4">
                <h2>Row2</h2>
              </div>
              <div className="w-1/4 flex justify-center">
                <input
                  id="o1"
                  name="mcq"
                  type="checkbox"
                  className=" accent-indigo-500 h-5 w-5"
                />
              </div>
              <div className="w-1/4 flex justify-center">
                <input
                  id="o1"
                  name="mcq"
                  type="checkbox"
                  className=" accent-indigo-500 h-5 w-5"
                />
              </div>
              <div className="w-1/4 flex justify-center">
                <input
                  id="o1"
                  name="mcq"
                  type="checkbox"
                  className=" accent-indigo-500 h-5 w-5"
                />
              </div>
            </div>
            <div className=" flex justify-between  px-2 py-3 bg-slate-100 mt-1">
              <div className=" w-1/4">
                <h2>Row3</h2>
              </div>
              <div className="w-1/4 flex justify-center">
                <input
                  id="o1"
                  name="mcq"
                  type="checkbox"
                  className=" accent-indigo-500 h-5 w-5"
                />
              </div>
              <div className="w-1/4 flex justify-center">
                <input
                  id="o1"
                  name="mcq"
                  type="checkbox"
                  className=" accent-indigo-500 h-5 w-5"
                />
              </div>
              <div className="w-1/4 flex justify-center">
                <input
                  id="o1"
                  name="mcq"
                  type="checkbox"
                  className=" accent-indigo-500 h-5 w-5"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-4 mb-4 flex justify-between center items-center">
          <div className="1/4">
            <button className=" bg-indigo-600 px-6 py-2 rounded-md text-white font-semibold">
              Submit
            </button>
          </div>
          <div className=" w-1/2 flex justify-around items-center">
            <div className=" bg-green-700 h-2 w-3/5 rounded-lg"></div>
            Page 1 of 1
          </div>
          <div className="1/4">
            <h2 className=" text-indigo-600 font-medium">Clear form</h2>
          </div>
        </div>
        <div className=" text-xs">
          Never submit passwords through Google Forms.
          <div className=" flex flex-col items-center">
            <h4 className=" mt-4">
              This content is neither created nor endorsed by Google.
              <a
                className=" underline"
                href="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfj-lonvcKnXZz3cbydIaCqYtK7a4-g8pqsICFg7_sGGcODJQ/reportabuse?source=https://docs.google.com/forms/d/e/1FAIpQLSfj-lonvcKnXZz3cbydIaCqYtK7a4-g8pqsICFg7_sGGcODJQ/viewform"
              >
                Report Abuse -
              </a>{" "}
              <a
                href="https://policies.google.com/terms"
                className=" underline"
              >
                Terms of Service
              </a>{" "}
              <a
                href="https://policies.google.com/privacy"
                className=" underline"
              >
                - Privacy Policy
              </a>{" "}
            </h4>

            <h4 className=" text-2xl font-semibold text-slate-500 my-8">
              {" "}
              Google <span className=" text-2xl font-normal"> Forms</span>{" "}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
// Roboto,Arial,sans-serif
