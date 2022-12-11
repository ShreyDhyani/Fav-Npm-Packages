import React from "react";

function Delete({...props}) {
  return (
    <div  onClick={props.callback}>
      <svg
        className="cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        height={20}
        width={20}
        enableBackground="new 0 0 512 512"
        version="1.1"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
      >
        <path
          fill="#F4B2B0"
          d="M287.559 414.049c0-46.081 37.357-83.439 83.44-83.439V176.793H92.391v280.789h207.42c-7.768-12.674-12.252-27.578-12.252-43.533z"
        ></path>
        <g fill="#B3404A">
          <path d="M161.679 381.158c-8.014 0-14.511-6.498-14.511-14.511v-92.871c0-8.013 6.497-14.511 14.511-14.511s14.511 6.498 14.511 14.511v92.871c0 8.013-6.497 14.511-14.511 14.511zM231.695 381.158c-8.014 0-14.511-6.498-14.511-14.511v-92.871c0-8.013 6.497-14.511 14.511-14.511s14.511 6.498 14.511 14.511v92.871c0 8.013-6.497 14.511-14.511 14.511z"></path>
          <path d="M454.44 399.538c-8.014 0-14.511 6.498-14.511 14.511 0 38.007-30.922 68.929-68.928 68.929-25.574 0-47.924-14.01-59.82-34.75-.302-.528-.612-1.055-.9-1.59a68.516 68.516 0 01-.988-1.927 67.908 67.908 0 01-.911-1.907c-.263-.57-.53-1.139-.778-1.718a67.298 67.298 0 01-1.399-3.532c-.145-.399-.273-.808-.411-1.21a69.655 69.655 0 01-1.288-4.18 68.828 68.828 0 01-.892-3.65c-.03-.142-.068-.28-.097-.424a69.449 69.449 0 01-.73-4.214c-.049-.345-.089-.695-.133-1.043a69.113 69.113 0 01-.342-3.314c-.03-.392-.065-.784-.09-1.177a69.016 69.016 0 01-.148-4.295c0-38.006 30.922-68.928 68.928-68.928 8.014 0 14.511-6.498 14.511-14.511V191.301h20.317c8.014 0 14.511-6.498 14.511-14.511v-49.213c0-32.872-26.744-59.617-59.616-59.617-8.014 0-14.511 6.498-14.511 14.511s6.497 14.511 14.511 14.511c16.869 0 30.594 13.725 30.594 30.595v34.705H72.073v-34.705c0-16.871 13.725-30.595 30.594-30.595h150.795c8.014 0 14.511-6.498 14.511-14.511s-6.497-14.511-14.511-14.511h-85.615V29.022h127.697v53.449c0 8.013 6.497 14.511 14.511 14.511s14.511-6.498 14.511-14.511v-67.96C324.566 6.498 318.069 0 310.054 0h-156.72c-8.014 0-14.511 6.498-14.511 14.511V67.96h-36.157c-32.872 0-59.616 26.745-59.616 59.617v49.216c0 8.013 6.497 14.511 14.511 14.511h20.317v266.278c0 8.013 6.497 14.511 14.511 14.511H292.16C310.014 496.277 338.701 512 371 512c54.01 0 97.95-43.941 97.95-97.951.001-8.013-6.497-14.511-14.51-14.511zm-171.634-28.079c-.199.412-.38.833-.575 1.247a99.428 99.428 0 00-1.312 2.898c-.226.531-.437 1.069-.654 1.603a99.63 99.63 0 00-1.045 2.647c-.219.585-.422 1.177-.63 1.767a97.736 97.736 0 00-.875 2.58c-.199.618-.385 1.239-.572 1.863a96.264 96.264 0 00-1.231 4.502 99.946 99.946 0 00-.607 2.625c-.141.646-.28 1.293-.408 1.944-.176.897-.332 1.799-.485 2.705-.107.643-.219 1.284-.313 1.931a98.965 98.965 0 00-.364 2.856c-.071.614-.154 1.226-.213 1.844a101.604 101.604 0 00-.244 3.194c-.033.522-.083 1.042-.109 1.567a98.766 98.766 0 00-.122 4.818 91.814 91.814 0 00.193 5.89c.064 1.056.144 2.11.241 3.162.045.489.086.978.138 1.464.151 1.408.325 2.812.537 4.21.054.355.123.704.18 1.056.177 1.088.37 2.175.583 3.256.107.544.225 1.087.341 1.628.203.943.421 1.882.652 2.818.119.483.235.969.361 1.45.36 1.37.742 2.734 1.161 4.086H106.901V191.305h249.588v125.868c-.065.01-.129.023-.194.033-.509.077-1.011.177-1.519.263-1.038.174-2.075.35-3.101.556-.599.12-1.19.261-1.785.393-.926.205-1.85.409-2.766.64-.62.155-1.233.328-1.849.496-.879.239-1.757.483-2.626.747-.621.189-1.236.387-1.852.588-.852.277-1.701.563-2.542.862a96.626 96.626 0 00-4.317 1.656c-.588.242-1.174.483-1.756.736-.836.363-1.663.742-2.486 1.126-.554.26-1.112.514-1.66.784-.855.419-1.696.858-2.535 1.3-.499.264-1.003.518-1.498.789a94.416 94.416 0 00-2.747 1.582c-.39.231-.788.451-1.174.686a98.165 98.165 0 00-3.858 2.484V273.78c0-8.013-6.497-14.511-14.511-14.511s-14.511 6.498-14.511 14.511v89.615c-.014.025-.032.048-.046.073a96.338 96.338 0 00-4.35 7.991z"></path>
          <path d="M399.048 386.002c-5.667-5.665-14.855-5.665-20.523 0L371 393.527l-7.525-7.525c-5.667-5.665-14.855-5.665-20.523 0-5.667 5.667-5.667 14.855 0 20.523l7.525 7.525-7.525 7.525c-5.667 5.667-5.667 14.855 0 20.523a14.468 14.468 0 0010.261 4.25c3.713 0 7.428-1.418 10.261-4.25l7.525-7.525 7.525 7.525c2.834 2.833 6.547 4.25 10.261 4.25s7.428-1.418 10.261-4.25c5.667-5.667 5.667-14.855 0-20.523l-7.525-7.525 7.525-7.525c5.667-5.668 5.667-14.857.002-20.523z"></path>
        </g>
      </svg>
    </div>
  );
}

export default Delete;
