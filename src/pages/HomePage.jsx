import BestSellerCard from "../components/BestSellerCards";
import C2A from "../components/C2A";
import EditorsPick from "../components/EditorsPick";
import SliderFirst from "../components/SliderFirst";
import SliderSecond from "../components/SliderSecond";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

export default function HomePage() {
    return (
        <>
            <Header />
            <SliderFirst />
            <EditorsPick />
            <BestSellerCard />
            <SliderSecond />
            <C2A />
            <Footer />
        </>
    )
}