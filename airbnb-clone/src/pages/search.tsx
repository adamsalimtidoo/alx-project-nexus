import NavBar from "../components/navbar";
import Tags from "../components/tag";

const SearchPage = () => {
  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="my-4 mx-8">
        <NavBar isSearch={true} isListing={false} />
        <div className="flex flex-row w-full justify-start items-start">
          <span className="border-r-2 border-grey-200 pr-4 flex space-x-4">
            <Tags name="Price" hasIcon={true} />
            <Tags name="Price" hasIcon={true} />
          </span>
          <span className="flex space-x-4 items-start">
            <Tags name="Price" hasIcon={false} />
            <Tags name="Price" hasIcon={false} />
            <Tags name="Price" hasIcon={false} />
            <Tags name="Price" hasIcon={false} />
            <Tags name="Price" hasIcon={false} />
            <Tags name="Price" hasIcon={false} />
            <Tags name="Price" hasIcon={false} />
            <Tags name="Price" hasIcon={false} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
