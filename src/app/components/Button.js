"use client"
const Button = () => {
    return (
        <div>
             <button
          className="bg-green-400 p-3"
          onClick={() => console.log("I have clicked")}
        >
          click here
        </button>
        </div>
    );
};

export default Button;