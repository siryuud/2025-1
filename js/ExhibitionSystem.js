function openModal(name) {
  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");

  // Add content based on the name
  let content = "";
  switch (name) {
    case "Caption":
      content =
        "<h2>Caption</h2><p>The captions explaining the exhibition and the artworks play a crucial role in shaping the audience's overall impression of the exhibition. Therefore, how they are introduced, which font is used, and what background they are placed on—every small detail contributes to forming the exhibition’s first impression.</p>" +
        "<img src='../image/caption/caption1.jpeg' alt='Caption Image 1'>" +
        "<img src='../image/caption/caption2.jpeg' alt='Caption Image 2'>" +
        "<img src='../image/caption/caption3.jpeg' alt='Caption Image 3'>" +
        "<img src='../image/caption/caption4.jpeg' alt='Caption Image 4'>";
      break;
    case "Frame":
      content =
        "<h2>Frame</h2><p>The choice of frame for displaying an artwork is also a crucial factor in shaping its impression. The texture and color that change depending on the artwork’s atmosphere, the spacing and height between frames—each element must be carefully considered for every piece.</p>" +
        "<img src='../image/frame/frame1.jpeg' alt='Frame Image 1'>" +
        "<img src='../image/frame/frame2.jpeg' alt='Frame Image 2'>" +
        "<img src='../image/frame/frame3.jpeg' alt='Frame Image 3'>" +
        "<img src='../image/frame/frame4.jpeg' alt='Frame Image 4'>" +
        "<img src='../image/frame/frame5.jpeg' alt='Frame Image 5'>";
      break;
    case "Light":
      content =
        "<h2>Light</h2><p>The lighting in an exhibition space has many areas to illuminate. There is the general lighting for the entire space, but its intensity varies depending on the exhibition's atmosphere. There are also different types of lighting for artworks and captions. Some lights can be directed at specific areas, and even a slight change in angle can alter the mood conveyed by the artwork. This makes lighting a highly significant factor in the exhibition.</p>" +
        "<img src='../image/light/light1.jpeg' alt='Light Image 1'>" +
        "<img src='../image/light/light2.jpeg' alt='Light Image 2'>" +
        "<img src='../image/light/light3.jpeg' alt='Light Image 3'>" +
        "<img src='../image/light/light4.jpeg' alt='Light Image 4'>" +
        "<img src='../image/light/light5.jpeg' alt='Light Image 5'>" +
        "<img src='../image/light/light6.jpeg' alt='Light Image 6'>" +
        "<img src='../image/light/light7.jpeg' alt='Light Image 7'>";
      break;
    case "Panel":
      content =
        "<h2>Panel</h2><p>EWhen exhibiting video media, the choice of display can significantly impact the nuance of the work. It is not just about considering the overall mood of the piece, but also about understanding the differences between viewing it on a large screen versus a small one, on a monitor versus projected onto a wall, or as a split screen versus a single screen. Since these works have been developed through experimentation with all possible variations, the type of screen used can reveal the artist’s intentions.</p>" +
        "<img src='../image/panel/panel1.jpeg' alt='Panel Image 1'>" +
        "<img src='../image/panel/panel2.jpeg' alt='Panel Image 2'>" +
        "<img src='../image/panel/panel3.jpeg' alt='Panel Image 3'>" +
        "<img src='../image/panel/panel4.jpeg' alt='Panel Image 4'>" +
        "<img src='../image/panel/panel5.jpeg' alt='Panel Image 5'>" +
        "<img src='../image/panel/panel6.jpeg' alt='Panel Image 6'>" +
        "<img src='../image/panel/panel7.jpeg' alt='Panel Image 7'>" +
        "<img src='../image/panel/panel8.jpeg' alt='Panel Image 8'>" +
        "<img src='../image/panel/panel9.jpeg' alt='Panel Image 9'>" +
        "<img src='../image/panel/panel10.jpeg' alt='Panel Image 10'>";
      break;
    case "Leaflet":
      content =
        "<h2>Leaflet</h2><p>Captions are one way to provide information about the exhibition space, but leaflets are another. They offer a more intuitive and detailed explanation of each artwork and the exhibition layout. While the design elements, such as the paper and typography, are important, the placement and positioning of the leaflets are also crucial factors that should not be overlooked.</p>" +
        "<img src='../image/replete/replete1.jpeg' alt='Replete Image 1'>" +
        "<img src='../image/replete/replete2.jpeg' alt='Replete Image 2'>" +
        "<img src='../image/replete/replete3.jpeg' alt='Replete Image 3'>" +
        "<img src='../image/replete/replete4.jpeg' alt='Replete Image 4'>";
      break;
    case "Section":
      content =
        "<h2>Section</h2><p>How the exhibition space is divided is a relatively intuitive element for the audience, but what defines these divisions is an aspect that can easily be overlooked. While walls or pathways can be used to separate sections, divisions can also be created using sheer curtains or lighting. It is essential to consider which elements will guide the audience’s gaze and movement throughout the space.</p>" +
        "<img src='../image/section/section1.jpeg' alt='Section Image 1'>";
      break;
    case "Seat":
      content =
        "<h2>Seat</h2><p>The chairs placed in an exhibition space serve as both resting areas and extensions of the artwork. If they were merely for rest, they wouldn’t come in such varied materials and designs. Their placement may be influenced by the overall atmosphere of the exhibition, the distance from the artworks, and the specific zones they occupy. In this sense, chairs function as an integral part of the exhibition system.</p>" +
        "<img src='../image/seat/seat1.jpeg' alt='Seat Image 1'>" +
        "<img src='../image/seat/seat2.jpeg' alt='Seat Image 2'>" +
        "<img src='../image/seat/seat3.jpeg' alt='Seat Image 3'>";
      break;
    case "Pedestal":
      content =
        "<h2>Pedestal</h2><p>Where should the artwork be placed? Should it be on the floor or on a table? Is the surface material a mirror? Is the color black or white? In reality, the pedestal or platform is not only an element that structures the exhibition but also becomes a part of the artwork itself.</p>" +
        "<img src='../image/pedestal/pedestal1.jpeg' alt='Pedestal Image 1'>" +
        "<img src='../image/pedestal/pedestal2.jpeg' alt='Pedestal Image 2'>" +
        "<img src='../image/pedestal/pedestal3.jpeg' alt='Pedestal Image 3'>" +
        "<img src='../image/pedestal/pedestal4.jpeg' alt='Pedestal Image 4'>" +
        "<img src='../image/pedestal/pedestal5.jpeg' alt='Pedestal Image 5'>" +
        "<img src='../image/pedestal/pedestal6.jpeg' alt='Pedestal Image 6'>" +
        "<img src='../image/pedestal/pedestal7.jpeg' alt='Pedestal Image 7'>";
      break;
    default:
      content = "<h2>Unknown</h2><p>No information available.</p>";
  }

  modalBody.innerHTML = content;
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
