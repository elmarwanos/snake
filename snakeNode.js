class snakeNode {
    height = Nheight - 2;
    width = Nwidth - 2;

    constructor(x, y, parent) {
        this.x = x;
        this.y = y;
        this.direction = "right";
        this.parent = parent;
    }

    update() {
        this.move();
        this.draw();
        if (this.parent !== null) this.direction = this.parent.direction;
    }

    move() {
        switch (this.direction) {
            case "right":
                this.x += Nwidth;
                break;
            case "left":
                this.x -= Nwidth;
                break;
            case "up":
                this.y -= Nheight;
                break;
            case "down":
                this.y += Nheight;
                break;
            default:
                break;
        }
    }

    draw() {
        context.fillStyle = "#FF0000";
        context.fillRect(this.x + this.width, this.y, this.width, this.height);
    }
}
