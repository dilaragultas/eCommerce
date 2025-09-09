import BestSellerCard from "../components/BestSellerCards";
import EditorsPick from "../components/EditorsPick";
import SliderFirst from "../components/SliderFirst";
import SliderSecond from "../components/SliderSecond";
import Header from "../layout/Header";

export default function HomePage() {
    return (
        <>
            <Header />
            <SliderFirst />
            <EditorsPick />
            <BestSellerCard />
            <SliderSecond />
        </>
    )
}