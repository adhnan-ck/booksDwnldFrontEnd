import { Header } from "@/components/Header";
import { Info } from "lucide-react";
const About = () => {

    return(
    <div>
        <Header/>
    <p className="text-xl text-muted-foreground">
            On a mission to make self help , motivational contents available for everyone.
          </p>
          
          <p className="text-muted-foreground"><Info /> Website is still under development</p>

    </div>)

}

export default About;