import BestCharacters from "../components/BestCharacters/BestCharacters";
import Insider from "../components/Insider/Insider";
import ListLastEvents from "../components/ListLastEvent/ListLastEvent";

export default function Home() {
    return(
        <div>
            <p>
                <BestCharacters/>
                <ListLastEvents/>
                <Insider/>
            </p>
            
        </div>
    );
}

