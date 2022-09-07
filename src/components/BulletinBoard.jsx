import ReactPost from "./ReactPost";

const BulletinBoard = () => {
      const data = [
            {
                  question: "Vad är tre fördelar med att använda React?",
                  answer: "Det är enkelt för utvecklare med kunskap i JavaScript att lära sig react. Det är smidigare att skapa dynamiska appar tack vare jsx där man integrerar Javascript kod direkt i HTML, vilket resulterar i mindre kod. Återanvändbara komponenter som gör att det blir lättare att utveckla och underhålla sina appar."
            },
            {
                  question: "Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?",
                  answer: "En Single Page Application är en webb app som laddar upp enbart ett webb dokument, sen uppdaterar innehållet / bodyn i det dokumentet med hjälp av API:er. En vanlig webbplats bygger tvärtom på flera olika webbdokument vilket gör att en ny sida laddas varje gång användaren besöker undersidor till en och samma sajt."
            },
            {
                  question: "Nämn tre skillnader mellan React och Angular",
                  answer: "Angular är ett JavaScript ramverk som är byggt med TypeScript medans React är ett JavaScript bibliotek som är byggt med JSX. Med Angular behövs inte ytterligare bibliotek medans React behöver det - t.e.x Redux. React är ett UI only ramverk. Att lära sig Angular tar längre tid och är svårare att lära sig medans det går fortare att lära sig React och är enklare."
            }
      ];
      return (
            <>
      { data.map((data) => {
            return <ReactPost data={data} />;
      })}
      </>     
      );
}
export default BulletinBoard;