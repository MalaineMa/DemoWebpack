const button = () => {
    const element=document.createElement("a");
    element.href="https://academy.hsoub.com/";
    element.className="button";
    element.innerHTML="more";
    element.target ="__blank"

    return element;

}
export default button;