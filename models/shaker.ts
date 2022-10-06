export default class ShakerModel {
    height: number;
    width: number;
    posX: number;
    posY: number;

    constructor() {
        this.height = 0;
        this.width = 0;
        this.posX = 0;
        this.posY = 0;
    }

    setHeight(height: number) {
        return this.height = height;
    }
    setWidth(width: number) {
        return this.width = width;
    }
    setPosX(posX: number) {
        return this.posX = posX;
    }
    setPosY(posY: number) {
        return this.posY = posY;
    }

    getHeight(): number {
        return this.height;
    }

}