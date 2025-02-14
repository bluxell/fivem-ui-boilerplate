import {debugData} from "../utils/debugData";

const App: React.FC = () => {
    debugData([
        {
            action: "setVisible",
            data: true,
        },
    ]);
  return (
    <div className="text-red-500 font-black">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iste,
      maiores delectus provident ipsam nisi ipsum eius id commodi aliquam beatae
      unde exercitationem alias nostrum placeat esse nam similique asperiores?
    </div>
  );
};

export default App;
