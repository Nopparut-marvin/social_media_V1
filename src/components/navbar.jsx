import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import $ from "jquery";

export default function navbar() {
  window.$ = $;
  $(document).ready(function () {
    $(".nav-toggler").each(function (_, navToggler) {
      var target = $(navToggler).data("target");
      $(navToggler).on("click", function () {
        $(target).animate({
          height: "toggle",
        });
      });
    });
  });
  return (
    <div>
      <nav class="flex items-center bg-gray-800 p-3 flex-wrap space-between">
        <a href="/#" class="p-2 mr-4 inline-flex items-center ">
          <span class="text-xl text-white font-bold uppercase tracking-wide">
            Social Media App
          </span>
        </a>
        <button
          class="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
          data-target="#navigation"
        >
          <MenuIcon />
        </button>
        <div
          class="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
          id="navigation"
        >
          <div class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
            <a
              href="/#"
              class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center bg-gray-900 hover:text-white"
            >
              <span>Post</span>
            </a>
            <a
              href="/#"
              class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
            >
              <span>Group</span>
            </a>
            <a
              href="/#"
              class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
            >
              <span>Profile</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
