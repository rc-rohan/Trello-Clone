
function Cards() {
  return (
    <div className="cards">
      <li
        id=""
        draggable="true"
        ondragstart="onDragStart(event);"
        ondragover="onDragOver(event);"
      >
        {" "}
        <span class="content">{}</span>{" "}
        <div class="icons">
          {" "}
          <span>
            {" "}
            <svg
              class="delete-task"
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="30px"
              height="30px"
              stroke="#808080"
            >
              {" "}
              <path
                pointer-events="none"
                fill="none"
                stroke-miterlimit="10"
                stroke-width="2"
                d="M23 27H11c-1.1 0-2-.9-2-2V8h16v17C25 26.1 24.1 27 23 27zM27 8L7 8M14 8V6c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v2M17 23L17 12M21 23L21 12M13 23L13 12"
              />{" "}
            </svg>{" "}
          </span>{" "}
        </div>{" "}
      </li>
    </div>
  );
}

export default Cards
