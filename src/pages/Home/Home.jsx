
import Layout from "../../components/Layout/index";
import QuadraCard from "../../components/CourtCard/index";
import Filter from "../../components/Filter";

function Home() {
    return (
        <>   
            <Layout> 

                <Filter/>
               <QuadraCard/> 
            </Layout>
        
            
        </>
    );
}

export default Home;
