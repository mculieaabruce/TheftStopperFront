import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [NgFor, MatCardModule,MatButtonModule,MatIconModule,MatInput,MatFormFieldModule],
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.css'
})
export class ForumComponent implements OnInit {
  
comments: comment[]=[
  
  {
    userID: 1,
    username: 'Alfredo pacheco',
    fotourl:'https://randomuser.me/api/portraits/men/1.jpg',
    comment: 'Paseaba por la avenida principal, distraído con el bullicio de la gente, cuando presencié una escena que me heló la sangre. Una mujer caminaba despreocupada, ajena a lo que la rodeaba, cuando un tipo, con aspecto de maleante, le arrebató el bolso de un rápido movimiento.La mujer se quedó petrificada, sin dar crédito a lo que había sucedido, mientras el ladrón huía a toda velocidad entre la multitud. Un grito ahogado brotó de su garganta y, sin pensarlo dos veces, salí tras él. Corrí con todas mis fuerzas, esquivando peatones y sorteando obstáculos, pero el ladrón era veloz como una liebre. Lo perseguí hasta que doblé una esquina y lo perdí de vista. Regresé donde la mujer, que aún se encontraba en estado de shock. Le ofrecí mi ayuda, pero solo pudo murmurar unas palabras de agradecimiento entre lágrimas. Ese día me sentí impotente y frustrado por no haber podido atrapar al ladrón. Sin embargo, también me conmovió la fragilidad de la situación y la vulnerabilidad a la que estamos expuestos en la calle. Espero que la mujer haya logrado recuperar sus pertenencias y que este incidente no le haya dejado un trauma irreparable.',
  },
  {
    userID: 2,
    username: 'Elsa Patito',
    fotourl:'https://randomuser.me/api/portraits/women/1.jpg',
    comment: 'Caminaba tranquilamente por la calle, disfrutando de la tarde soleada, cuando de repente sentí un jalón brusco en mi bolso. Al voltear, vi a un hombre corriendo con él en la mano. Lo seguí con la mirada, sintiendo una mezcla de miedo y rabia. En un instante, desapareció entre la multitud. Me quedé atónita, con las manos temblorosas y el corazón palpitando. Revisé mis bolsillos y, para mi desgracia, mi teléfono y mi billetera habían desaparecido.Fue una experiencia desagradable que me dejó una sensación de vulnerabilidad, pero también un aprendizaje: ahora soy más precavida y cuido mejor mis pertenencias.',

  }

];
ngOnInit(): void {}

}
interface comment{
  userID: number;
  username: string;
  fotourl: string;
  comment: string;
}