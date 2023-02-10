import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../shared/models/product';

@Injectable()
export class InventoryService {

    items: Product[];

    constructor(){
        this.items= [
            {
                id: 0,
                title: "Notebook",
                description: "Notebook ASUS X515EA Intel I3 1115 G4 | RAM 4GB | SSD 256Gb | 15.6 | X515EA-BR1324",
                img: "https://s3-sa-east-1.amazonaws.com/saasargentina/JyNMe54QqkoWP7UGGiz6/imagen"
            },
            {
                id: 1,
                title: "Escritorio",
                description: "escritorio gamer 120x55x76 negro/rojo",
                img: "https://arcencohogar.vtexassets.com/arquivos/ids/313915/1329335-3.jpg?v=637794251828500000"
            },
            {
                id: 2,
                title: "Sillon",
                description: "Sillon Chesterfield Cuero Harness 1.24",
                img: "https://mijormi.vteximg.com.br/arquivos/ids/173628-1000-1332/Sillon-clasico-cuero-SILLON-CHESTERFIELD-CUERO-HARNESS-124-Landmark-0.jpg?v=637707763572300000"
            },
            {
                id: 3,
                title: "Silla gamer",
                description: "SILLON GAMER MELON BUTACA GAMING 2 ALMOHADONES 90042",
                img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhAQEBIPDxAQEA8PDw8PDxAPDw8PFRUWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQFy0lHSYtLS0rKystLS0rKy0tLS42Ny0tLS03LS0rLS0tLTUtLS0tLy0tLS8tLS0rLS0vLy0tN//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAABAgUGB//EADkQAAICAQEFBgIJBAIDAQAAAAABAhEDIQQSMUFRBWFxgZGhEyIUMkJScrHB4fAVI2KSgtFTY/Ez/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAArEQEBAAIAAwYFBQEAAAAAAAAAAQIRAyFBEjFhsdHwIlFxkaEyM0KB8RP/2gAMAwEAAhEDEQA/APiRCEAhCEAhCEQFoLBA4h8aAZwROnsyEMCOjgA6WznSwM5mBj+GQHTwyGoZDnY5DMJPvAc+IDnMFvPv9Ac5hbLFZpnM2ljeWYhnkEc7aTl7QjqZznZ0BzMyFZoezIUmgAso0zIEIQgFMhZAIQhALIQgFELIBREQtAaihjEgMEM4kA1hQ/hEcQ7hA6GFjuKRzsbG8WRLV8Ipyfglb/ILJu6Z2va5uTxYpbm6l8TJVyTf2I9H3i/0S9XkzT73kk/1L2XSKlLVzbnLnxD26u/Qzbq609fD4Uz4eWcz1rp79KSlsSXCWRf85GMWfNidxyTnFavHOTlGS6a8H3oclX81F80ehf6cbLj/ACnr78XX+OpJSi7jJKSfd/3y8hbLIX7On8so/dlvL8M+X+yf+wTIxHPKc+RfKI5hzKxPKVkjmQnkQ7mFMgC7MMJIGBCEIBC6IkWBmiyyARoo20ZaAohCAUaRRqABsURiEQeOIxBAGxIcxCmMaxgNRZraZVja5zlHGvN2/aNeZiCvy1fRLq3yQptO1bzTi6jj0hKvrTk1cteVJLyI3jNTtHc2VLTktPQwtrXA5+LOr/vRbXJxb3b6tcWdCObZ6bUoJqqVKLu1yZWFy2hLibTTMSy4W3vSh6p+n85CefPji7xOTd8k1EB7ZtMiX31LH56Sj7pLzCzZzHnnNpOlKt5KPGNcH4j8c6yLeVX9uHOEuen3XyffROret4/TyDyMUyjM2LZCsFMonkQ7lFMiAWkjDDuJhwAGVRuSIBlIhtggNX3FFEAKyNFkAw0Q00SgM0bhElBMaAPiGIRA4kGiAaKGcaSTlK2r3YxTpzlxevJLS33rqLQY5Jrcg/xLz3rfs4ErWPW/IrlU8mkmox47kdI+L5vzsS22TVRT0R0HLUUzYHJyfSTXfwQiW297t9lbLGeNuSvdk1x491mtp7JxyV18N8NFo14fqcaHajxxUIcvdgs/amV8W17Estu9vTw+Nhjwrhlhu29/vn+XUn2ZjXO+PQLh2SCtr5qTa0OAtunzfuN7L2q4vXzQ5/NwuUs5Y+YeDJL4yknb1TXd/GM58EW96LcZcdHXuYwQSy7z4StxZnf0NRgfBkk2oT4vSE+Ck+UX49f/AKZmE2dbyp/eVVxV9Cbb9fJXDfnXhbJ1bvPHZLIAmhmSA5IlYL0DaDtGUgFmipBJg2BVlNGqJQGKIbogGiiygLRZSNIC4oLBGYBIoAkA0ECgg0ACwQfdcouC42pQ/Fzj5r3SAwDxJWsctXZaMm0m9BnZ4wqd071rq+hvLBNqXBTtNf5Ln7p+oDZ9N/hapK++xDKaugXixqcVu3G/HRobx7PjupQpNScXu/aSteT6gJYn8SMb4yUb8hyMJSXw3LWClT+04XwCBLBFpxePVU40ta5piuXDCl8lSUmm1wceT/Q6UscpK95b0XFOvvcm/wCdRHbnbi70e9SXDvAmy4Ula5prXguvHyEISbpDeGUqlJvRKS9mkV2bgtOXPgvEQH2V7r3uUOHfk/bj6GJBa6cFou9dfPj5g5IT5t58vhnTzDkgU0HozNFcylakSCyiYroAplAIYzIEkBKKaCUYkBghZYF0VRZpICoo3GJIoIkBUYhIxJRuCA1BBYmIoJGIBIoPFAUg0GAftGSWHAvtOWSTfdaVexz9ll88m/q7rvv6IZ7Yf/5R+7BvzlTfvYhsVuUor7Ubvo1qiOmffJ4TyMz+vHjaktObdaHQjVJqL3kpWud8HYhll/cg+anb9Dpx3lTtVKOqvh0DCp7qdqL3Wop1ekf1OdtsUpVXFPyfX0Oqk03FtPVV3Pocvam26erhevVPl5fqQLSmtydck1fWXP8AU12bP6q/yXqB2jSEl1afhfL3L7OesfxR/MXurfC/cx+sdHdoEwmF3CPhT8VoYZpzVumZRCxRibABJAmg8lzAzQC2aIFRG5KwUogCoxJBnEFMAZCEAtG4mTUQCRQRA4s1YG2biDTCRALjDNaaNLS95q16A8cQ1gLfG/8AZHj91Ie2KfxKVJa05Jv5v5+py3s1z7t9Ku51/wBnYlPdi5L7MW/CkAjt+S2vw3/tJy/Jgdg+tJ893zcftexNrVRXhGPpFAdjnLe+Wrp8dSRviX4r9vs6Wdr4kX9nf9joR3a1T1j8vSr4HIrLd0nTvgMPbsvy3FfKqXFeDDLoz4VrvJx9a4nP2qm7XLevudq/zRT7SyW5biv8WnfyFJ7RP5vlXzce7uQANofyv8Wv6Guz38y8n6MDnk2tTWwv50uugJdXbqwyfWSrSUvP5n+wnl2jV23GVqlG0khrDCp5F/nJ+TegDasFz4/Zvxp0J3NZz4rPEbYcbdtzaSTa3uDfTgXJcQsPqx8Fp0MSZWAGzLVmpFMDG6DlENQNgClEWyIbkxXKAIhKLAtFopFgWnRdmS0gCJhIGIoIgGYSCxFoB8TAqcfm/wCcP0Opn2OTxTbUopxajaa3pPkr87/c4+3OpRfRxkvFJtfkTtFTjOXzSq3uu39V6pE3zamO8bl4z879C+1ZLtdKa80jHZ2Xdlfc16m9uyRbU1o5L54pUoy7u4UjKhDPnla9bs21wlSpXT1fcrYTJKHGvRHlcO2Si04umg+XtScuaX4dDN7W+T0cO8CcKzOXtdL79HZyzj0rj0FNormqOY9tn95+pie0t8W2Xm4XsdNi7bTTfgL4J00+mpJZLMLkuBWdO8pXKcu+K9v2B5rU9dH8N/mc7Nk32+O7xSf5h5RqeOPNY3fjJOT/ADRO7UdMtZXLPx876bPpmJFpGMrNOTFEMuRaYEsqUTdozNALTQrkY3kFMgAyyEAhpGEEiBaQSMTUIhlEAUYBoYy8cRjdACkMYcZcMYWKA53aujj/AMaXWmzobfhvFGfNQx310ik/dHO7Xm95PnDca8XvP9EdHLm0Sk/lmpRXjxXtL2J1dMf05T6X39yENlaUZKEm9Hbpxv8AnUzmjKT+aOvhSG8HbMowjGloq4dOZU+2L1cYvlwKwRezvhu+xmWB84+w++1l91dDP9U/xWnKiKRezvnH2I9mf3fYc/qT00WnKiv6i+i07ghX6I/usNLZ5y0krrppXoE/qEilt8uoGNixKVLrJR9XRNol/dU//I5tdyb09mgvZtXCtZW5NLV6fvQv2jayqOq3IaJ6U+P/AETq3eXDnjfL/a6ExfIxh669RfKjTmGwfxTU5AQGccgjkCxGpyADmYpMNmYvJgUQogFphYAEGgAzELEXhI3vgMxYaMhHfCRyAOqYVMQjIaxSArPscZNtuWtWk1WhMuCLju1SVU1o1XB2HUjGTGpJxd0+jphZdOfg2WMrak63muC17/cO+zYdX7Bdn2dQTSbdu9f53BmEIfQodX7A9q2aMYuSu1WnXWjoOIt2jH5Gu9fmAl2djWRu7VK9GP8A0GHf6ivZsKbrmtfVDzyAD+iw6P1K+hw7/ULZN4CY8MI8FxSTvXh+4Kex427qn3aJ94VMsG16ULZpBZSFsoC0uJpRIEQGUzTMSZSYGMgtIZmAmBghCAWkbiZRtIDSNRYMtMAjZrHIwmXEBrGGjIXxsKmAaMwsL7xVMLj15gNpWU0F2TZ5Te7HV03VpaLjxNbVi+HSnJRb1SbjquvEGiwr2g/kdc2l7jamuUk/AU7Ul8mr+0uTAS2B/NXVS/Kx2xLs5/3F4T9d10dDV8gKJQ3s2xZJ3SjFJW5SentbMbZscoJScoSTdXDf0ffvRXQm5vTUwyuNyk5TqXRoFANXcysgzYDIxmcH0BfCAXSLCuK/iMMDEmYbNSfgYYA5MFMLJAZAUQhALRqLKoJECI0kXFGwMpG4wLijaAkYv+MIjFd5PMAyVkS8/DUYxdp4oxjuYIuVLec0sibrpK17E2ntjPki4OlB/ZbtLwXBeSMdq7/S9P8Ax4cx3eJN/KS30hHactqlaad25KvTiBly+abda9L7m2XKD7vcy9OfsbeYSEn0/wBnf5UVlm5fK3pa0SSQCWTx9S9ndyUa473jai2vyA1CLSclaalSfQL9OytU5WuVpX6oa2vYMmPFKc4OK34pW1q2ovk+k0/M5kZroTlVyxuN1Zo3j2ufNza5pTf5BcW08VJ6OqtNUvK7FscYvm0MRwLlNeaKhrFC/q1Lui7ddaWpuWmjVdz0AbO8mN70JQuqulK14STQ2u2sq+vHFJVxW8n46OvYzbl0jvw8eFZ8WVl+m557/AEr7vUG4vuC5cvxN6cMdRjrL4cPliq4yaXc9WLuXSyxxykl1LtHB9wKafQ25Mw5sqAsqv5ZuTYOV9AMTQGQSTYOTAyQhAN2bizBpMAykaUgKZpMAqZakDTNWATeIu0N24xhjbejlkhvtacVbpegNoH8EC4SpaXxSVu3VM0sjL+EjaggMbxSx2HSQSNALfRTMMO7OH4l76D1i+fivFfmB0Nv7V+NilicN3dcGpXbe7GENfKKOT8AHhyu2nevXlz/AEHYImOMnc6cTi5cS9rK7pVwaM7zQ60Z3CuZZZWX8fk+D0YdwRh44gVsu1ZcUt7Fknjlxbx5Jw3ul7rV/uMym5fM0lKXzSSSSTfctF1rvFHBci0wDvyBSsv1MtAVqDlZt0DkAOQNhGwcmBkshANmkYNAaRdmEy7A3ZZiy7AIiwe8XvgFRdgfiE+IAbeNKYrvE3gHFkMTlYvvE3gBwjUuPXzHoy0FC98BpzK3hbfK+IAzZW8gG+TfANaKbA7xN4Au+Zcwe8ZbAI5GbMWVYG2DkW2ZYEIUQAiLZCAUWUQCyyiAWQhAIUyiAQshALLIQCMpkIBTKIQCyEIBCMhAKZTIQCiEIBDLIQCEIQD/2Q=="
            },
        ];
    }

    public get(): Product[] {
        return this.items;
    }

    public add(item: Product): void {
        this.items.push(item);
    }

    public remove(id: number): void{
        let i= this.items.findIndex(item => item.id === id);
        i > 0 ? this.items.splice(i, 1) : "";
    }

}
