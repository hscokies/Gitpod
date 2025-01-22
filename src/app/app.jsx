import { RootPage } from "../routes";
import {Footer, Header, Snackbar} from "@/widgets/index.js";


export const App = () =>{
  return <>
    <Header/>
    <RootPage/>
    <Snackbar buttonText='Accept Cookies'>
      This website uses cookies to enhance the user experience. Read our <a>privacy policy</a> privacy policy
    </Snackbar>
    <Footer/>
  </>
}

