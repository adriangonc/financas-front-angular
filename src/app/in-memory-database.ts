import {InMemoryDbService} from "angular-in-memory-web-api";

import { Category } from "./pages/categories/shared/category.model";


export class InMemoryDataBase implements InMemoryDbService {
    createDb(){
        const categories: Category[] = [
            { id: 1, name: 'Despesas fixas', description: 'Água, Luz, Internet e telefone'},
            { id: 2, name: 'Faturas e boletos', description: 'Faturas de cartão de crédito e boletos'},
            { id: 3, name: 'Salário', description: 'Salário recebido'},
            { id: 4, name: 'Outras despesas', description: 'Despesas não planejadas'},
            { id: 5, name: 'Lazer', description: 'Passeios, jogos, cinema entre outros'}
        ];
        return { categories }
    }
    
}