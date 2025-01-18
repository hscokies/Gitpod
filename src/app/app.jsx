import { RootPage } from "../routes";
import {Snackbar} from "@/widgets/index.js";


export const App = () =>{
  return <>
    <RootPage/>
    <Snackbar buttonText='Accept Cookies'>
      This website uses cookies to enhance the user experience. Read our <a>privacy policy</a> privacy policy
    </Snackbar>
  </>
}

