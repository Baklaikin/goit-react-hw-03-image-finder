import {LoadContainer} from "components/Loader/Loader.styled";
import Loader from "react-loader-spinner";

export const LoaderSpinner = () => {
    return <LoadContainer>
          <Loader type="Circles" color="#00BFFF" height={50} width={50} />
      </LoadContainer>
}
  