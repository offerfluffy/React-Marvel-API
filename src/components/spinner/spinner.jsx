function Spinner() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        width="200"
        height="200"
        style={{
          display: "block",
          margin: "auto auto",
          background: "rgb(255, 255, 255)",
        }}
      >
        <g>
          <rect fill="#e15b64" height="20" width="20" y="19" x="19">
            <animate
              calcMode="discrete"
              begin="0s"
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;0.125;1"
              values="#5c5c5c;#e15b64;#e15b64"
              attributeName="fill"
            />
          </rect>
          <rect fill="#e15b64" height="20" width="20" y="19" x="40">
            <animate
              calcMode="discrete"
              begin="0.125s"
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;0.125;1"
              values="#5c5c5c;#e15b64;#e15b64"
              attributeName="fill"
            />
          </rect>
          <rect fill="#e15b64" height="20" width="20" y="19" x="61">
            <animate
              calcMode="discrete"
              begin="0.25s"
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;0.125;1"
              values="#5c5c5c;#e15b64;#e15b64"
              attributeName="fill"
            />
          </rect>
          <rect fill="#e15b64" height="20" width="20" y="40" x="19">
            <animate
              calcMode="discrete"
              begin="0.875s"
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;0.125;1"
              values="#5c5c5c;#e15b64;#e15b64"
              attributeName="fill"
            />
          </rect>
          <rect fill="#e15b64" height="20" width="20" y="40" x="61">
            <animate
              calcMode="discrete"
              begin="0.375s"
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;0.125;1"
              values="#5c5c5c;#e15b64;#e15b64"
              attributeName="fill"
            />
          </rect>
          <rect fill="#e15b64" height="20" width="20" y="61" x="19">
            <animate
              calcMode="discrete"
              begin="0.75s"
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;0.125;1"
              values="#5c5c5c;#e15b64;#e15b64"
              attributeName="fill"
            />
          </rect>
          <rect fill="#e15b64" height="20" width="20" y="61" x="40">
            <animate
              calcMode="discrete"
              begin="0.625s"
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;0.125;1"
              values="#5c5c5c;#e15b64;#e15b64"
              attributeName="fill"
            />
          </rect>
          <rect fill="#e15b64" height="20" width="20" y="61" x="61">
            <animate
              calcMode="discrete"
              begin="0.5s"
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;0.125;1"
              values="#5c5c5c;#e15b64;#e15b64"
              attributeName="fill"
            />
          </rect>
          <g />
        </g>
      </svg>
    </>
  );
}

export default Spinner;
