import { Globals } from './../../globals';
import { List } from './../oneList/oneListTypes';
import axios from 'axios'

export function getUserLists(): List[] {
//     //*Test data 
    return [
        {
            name: 'Ma liste trop cool de course bio pour les weekend de pluie',
            nbArticles: 50,
        },
        {
            name: 'Ma liste trop cool de course bio pour les weekend de pluie',
            nbArticles: 50,
        },
        {
            name: 'Ma liste trop cool de course bio pour les weekend de pluie',
            nbArticles: 50,
        },
    ];
}
// export function getLists(): List[] {
//     return axios.get(Globals.URL)
//         .then((listOfList: List[]) => {
//             return listOfList.map(list => {
//                 new List(list);
//             })
//         })
// }