import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{
  teamMembers: any[] = [
    {
      name: 'Bryan',
      role: 'Desarrollador',
      image: 'https://scontent.flim16-3.fna.fbcdn.net/v/t1.6435-9/92459279_509634763042012_6319134903854170112_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEfbOKg5uMDiQej5s2VbT8BOL-ssz6aRhE4v6yzPppGEUy5HorX7FGgyeVB5_uIbHEQCObF6fKyI9pqaybB2qgB&_nc_ohc=ZL_KAErSDIkQ7kNvgFXCEx5&_nc_ht=scontent.flim16-3.fna&oh=00_AYBTSLbPwBiYf9ZAj7IXwVMeP0A7o0dnwkmjU-YAKHGW0Q&oe=6675C476'
    },
    {
      name: 'Franco',
      role: 'Desarrollador',
      image: 'https://scontent.flim16-2.fna.fbcdn.net/v/t1.6435-9/67344703_1086158528255685_637863705006047232_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeE46_vEh9L_gOaciEUusAlFDLtAs0UkcoEMu0CzRSRygWrYmtR8o29Qd5YPMdOgtNlBTqNxyo1yHN7iniqp4J31&_nc_ohc=D_Oxix08wuEQ7kNvgGbjYH_&_nc_ht=scontent.flim16-2.fna&oh=00_AYBn5FAJ5SKtzXSyn1pA26MzThbAjMzLnBL_AFJPPU8_Wg&oe=6675E8DF'
    },
    {
      name: 'Alfredo',
      role: 'Desarrollador',
      image: 'https://scontent.flim16-3.fna.fbcdn.net/v/t1.6435-9/44300741_1267609093376986_1786955443109625856_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGM1EdIplpEye0t7kcsQQ93fs2gTK1_qsR-zaBMrX-qxMV2GPRLpd1EWOTkE65k9zXRgQq-dvmGm118YghbVGKf&_nc_ohc=Uigf8ncpzE4Q7kNvgHV6dwg&_nc_ht=scontent.flim16-3.fna&oh=00_AYCfayJnparefvD7tTKg7j520fzkRvzCC1hLe2HUgeOUgg&oe=6675C4C7'
    },
    {
      name: 'Andre',
      role: 'Lider',
      image: 'https://scontent.flim16-1.fna.fbcdn.net/v/t39.30808-6/241652965_1754873844698977_7664485927866947764_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGyaB8iB3vWYCau62Ogon4pqH4t8lpq4yaofi3yWmrjJlnNTaW2D0IcmgoEMwihSrGJN1zh0rqfWHUVqZMYudFz&_nc_ohc=IMDv2T0hQ50Q7kNvgFEoI1x&_nc_ht=scontent.flim16-1.fna&oh=00_AYDCQvyu8Cyve0_oKpYB0YojrfOyFPzvNkTvZ2zV446HVA&oe=66543651'
    },
  ];

  constructor() { }

  ngOnInit(): void { }
}
