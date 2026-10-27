export class Tasca {
    id: number
    nom: string
    completada: boolean
    data: string

    constructor(id: number, nom: string) {
        this.id = id
        this.nom = nom
        this.completada = false
        this.data = new Date().toLocaleDateString()
    }
}