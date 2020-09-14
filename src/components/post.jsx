import React from "react";
const allColor = [
  "#F94144",
  "#F3722c",
  "#F8961E",
  "#F9C74F",
  "#90BE6D",
  "#43AA8B",
  "#577590",
];
function post({ list, id }) {
  return (
    <div>
      <div className="max-w-md w-full lg:max-w-full lg:flex mb-5">
        <div
          className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden "
          style={{ backgroundColor: allColor[id % 7] }}
          title="Woman holding a mug"
        ></div>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">
              {list.title}
            </div>
            <p className="text-gray-700 text-base">{list.body}</p>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
              <p className="text-gray-900 leading-none">Jonathan Reinink</p>
              <p className="text-gray-600">
                May {id % 31 === 0 ? "1" : id % 31}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default React.memo(post);
