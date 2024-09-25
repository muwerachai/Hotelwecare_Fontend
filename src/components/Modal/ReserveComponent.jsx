import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  adultIncrease,
  adultDecrease,
  childIncrease,
  childDecrease
} from "../../store/ReserveCounterSlice";

function ReserveComponent() {
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const adultCounter = useSelector((state) => state.reserveCounter.adultsCount);
  const childCounter = useSelector(
    (state) => state.reserveCounter.childrenCount
  );
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <div className="flex flex-col h-[27rem] border rounded-xl p-3">
        <div className="w-[15rem] flex mx-auto mt-[1rem] justify-between">
          <h1 className="text-xl">$3,764</h1>
          <div className="font-light mt-[0.1rem]">night</div>
          <i className="fa-solid fa-star mt-[0.3rem] ml-[1rem]"></i>
          <div className="text-sm ml-[0.1rem] mt-[0.3rem]"> 4.67</div>
          <div className="text-sm mt-[0.3rem] ml-[0.5rem] text-gray-400 underline">
            6 reviews
          </div>
        </div>
        <div className="w-[15rem] h-[3.5rem] mx-auto mt-[1rem] flex">
          <div className="p-2 border w-[7.5rem] h-[3.5rem] flex-1 rounded-tl-md">
            {/* calender */}
            <form className="w-[7rem] text-left text-[0.7rem]">
              <label htmlFor="checkIn" className="font-bold">
                CHECK-IN
              </label>
              <br></br>
              <input
                className="cursor-pointer"
                type="date"
                id="checkIn"
                name="checkIn"
                onChange={(e) => setInput(e.target.value)}
              />
            </form>
          </div>
          <div className="p-2 border w-[7.5rem] h-[3.5rem] flex-1 rounded-tr-md">
            <form className="w-[7rem] text-left text-[0.7rem]">
              <div className="nativeDatePicker">
                <label htmlFor="checkout" className="font-bold">
                  CHECKOUT
                </label>
                <br></br>
                <input
                  className="cursor-pointer"
                  type="date"
                  id="checkout"
                  name="checkout"
                  onChange={(e) => setInput(e.target.value)}
                />
              </div>
            </form>
          </div>
        </div>
        <div
          className="w-[15rem] border mx-auto p-2 rounded-br-md rounded-bl-md"
          onClick={handleClick}
        >
          <div className="text-[0.7rem] mx-auto font-bold ml-[0.5rem]">
            GUESTS
          </div>
          <div className="font-light text-[0.8rem] ml-[0.5rem]">
            {adultCounter + childCounter} guest
            <i className="fa-solid fa-chevron-down ml-[9rem] mt-[-0.9rem]"></i>
          </div>
          {/* setShow */}
        </div>
        <div
          className={`${
            isOpen
              ? "bg-white block w-[15.2rem] h-[16.6rem] mx-auto z-[500]  rounded-xl shadow-xl"
              : "hidden"
          }`}
        >
          <div className="border-b w-[15.1rem] p-5 mt-[0rem] mx-auto rounded-xl shadow-2xl ">
            {/* table 1 */}
            <div className="flex flex-row">
              <div className="flex flex-col">
                <div className="w-[8rem]">Adults</div>
                <div className="w-[8rem] text-sm text-gray-500">Age 13+</div>
              </div>
              <div className="flex flex-row w-[6rem] ml-[-1.6rem]">
                <button
                  onClick={() => dispatch(adultDecrease())}
                  className="border w-[2rem] h-[2rem] text-gray-400 rounded-full mt-[0.5rem] hover:border-black hover:text-black"
                >
                  -
                </button>
                <div className="w-[2rem] text-center mt-[0.7rem]">
                  {adultCounter}
                </div>
                <button
                  onClick={() => dispatch(adultIncrease())}
                  className="border w-[2rem] h-[2rem] text-gray-400 rounded-full mt-[0.5rem] hover:border-black hover:text-black"
                >
                  +
                </button>
              </div>
            </div>
            {/* table 2 */}
            <div className="flex flex-row mt-[1rem]">
              <div className="flex flex-col">
                <div className="w-[8rem]">Children</div>
                <div className="w-[8rem] text-sm text-gray-500">Ages 2-12</div>
              </div>
              <div className="flex flex-row w-[10rem] ml-[-1.6rem]">
                <button
                  onClick={() => dispatch(childDecrease())}
                  className="border w-[2rem] h-[2rem] text-gray-400 rounded-full mt-[0.5rem] hover:border-black hover:text-black"
                >
                  -
                </button>
                <div className="w-[2rem] text-center mt-[0.7rem]">
                  {childCounter}
                </div>
                <button
                  onClick={() => dispatch(childIncrease())}
                  className="border  w-[2rem] h-[2rem] text-gray-400 rounded-full mt-[0.5rem] hover:border-black hover:text-black"
                >
                  +
                </button>
              </div>
            </div>
            {/* table 3  */}
            <div className="flex flex-row mt-[1rem]">
              <div className="text-[0.8rem] font-light">
                This place has a maximum of 4 guests, not including infants.
                Pets aren't allowed.
              </div>
            </div>
            {/* table 4 */}
            <div className="p-3 flex underline">
              <button className="ml-[9rem]">Close</button>
            </div>
          </div>
        </div>
        <div className="w-[15rem] mx-auto mt-[1rem]">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-[15rem]">
            Reserve
          </button>
        </div>
        <div className="w-[15rem] mx-auto mt-[1rem] flex justify-between">
          <div className="underline">$3,270 x 5 nights</div>
          <div>$16,352</div>
        </div>
        <div className="w-[15rem] mx-auto mt-[1rem] flex justify-between">
          <div className="underline">Service fee</div>
          <div>$2,470</div>
        </div>
        <hr className="mt-[2rem] w-[15rem] mx-auto"></hr>
        <div className="w-[15rem] mx-auto mt-[1.5rem] flex justify-between mb-[1.5rem] font-bold">
          <div>Total before taxes</div>
          <div>$18,822</div>
        </div>
      </div>
    </>
  );
}
export default ReserveComponent;
