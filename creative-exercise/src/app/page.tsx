export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" >
        <circle id="circle1" cx="50" cy="50" r="40" fill="red">
          <animate
            attributeName="r"
            from="40"
            to="50"
            dur="1s"
            begin="0s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}
