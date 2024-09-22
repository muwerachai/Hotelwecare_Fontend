import WhitelistItem from "./WhitelistItem";

function WhitelistContainer() {
  return (
    <>
      <div className="mx-[5rem]">
        <div className="text-[2rem] mt-[1rem]">
          <h1 className="my-auto">Whitelists</h1>
        </div>
        <div className="grid grid-cols-3 content-center">
          <WhitelistItem />
          <WhitelistItem />
          <WhitelistItem />
          <WhitelistItem />
          <WhitelistItem />
          <WhitelistItem />
          <WhitelistItem />
        </div>
      </div>
    </>
  );
}
export default WhitelistContainer;
