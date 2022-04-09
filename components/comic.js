AFRAME.registerComponent("tour", {
    init: function () {
        this.placesContainer = this.el;
        this.createCards();
    },

    createCards: function () {
        const thumbNailsRef = [
            {
                id: "spiderman",
                title: "Spiderman",
                url: "../assets/thumbnails/spiderman.jpg"
            },
            {
                id: "bad-guys",
                title: "Bad Guys",
                url: "../assets/thumbnails/badguys.jpg"
            },
            {
                id: "superman",
                title: "Superman",
                url: "../assets/thumbnails/superman.jpg"
            },
            {
                id: "captain-aero",
                title: "Captain Aero",
                url: "../assets/thumbnails/captain-aero.jpg"
            }
        ]
        let previousXPosition = -60;
        for (var item of thumbNailsRef) {
            const posX = previousXPosition + 25;
            const posY = 10;
            const posZ = -40;
            const position = { x: posX, y: posY, z: posZ };
            previousXPosition = posX;

            const borderEl = this.createBorder(position,item.id)
            const thumbnail = this.createThumbNail(item);
            borderEl.appendChild(thumbnail)
            const titleEl = this.createTitleEl(position,item);
            borderEl.appendChild(titleEl)

            this.placesContainer.appendChild(borderEl)
        }

    },
    createBorder: function (position, id) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("id", id);
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
            primitive: "ring",
            radiusInner: 9,
            radiusOuter: 10
        });
        entityEl.setAttribute("position", position);
        entityEl.setAttribute("material", {
            color: '#00bcd4',
            opacity: 0.4
        });
        return entityEl
    },
    createThumbNail: function (item) {
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("visible", true);
        entityEl.setAttribute("geometry", {
            primitive: "circle",
            radius: 9,
        });
        entityEl.setAttribute("material", {
            src: item.url

        });
        return entityEl
    },
    createTitleEl: function(position,item){
        const entityEl = document.createElement("a-entity");
        entityEl.setAttribute("text", {
            font:'exo2bold',
            align:'center',
            width:60,
            color:'#e65100',
            value:item.title
        });
        const elPosition = position;
        elPosition.y=-20;
        entityEl.setAttribute("position", elPosition);
        entityEl.setAttribute("visible", true);

        return entityEl;


    }
})