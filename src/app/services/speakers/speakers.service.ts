import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeakersService {
  private speakers:Speaker[] = [
    {
      nombre: "Ada Demitropulos",
      especialidad: "todas",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum velit at turpis ornare ullamcorper. In vulputate, purus sit amet hendrerit semper, tellus risus imperdiet mi, ac pellentesque urna ipsum nec nisl. Ut pretium mauris erat, eu sollicitudin lacus rutrum quis. Cras ullamcorper lacus nec risus hendrerit tincidunt. Pellentesque in iaculis lorem. Ut quis urna maximus, congue sem facilisis, luctus massa. Etiam et elit tempus ex gravida ultrices quis in mauris. Sed ut mauris sit amet velit lobortis hendrerit. Etiam euismod, felis vitae lobortis venenatis, odio metus consectetur velit, et consectetur purus orci eget purus. Morbi fermentum sagittis lorem eget facilisis. Morbi metus est, consectetur vitae risus vitae, dapibus rhoncus velit. Nunc dignissim ut risus ac consequat. Duis vel metus non diam laoreet accumsan ut non sem. Nam non pharetra augue, sed ullamcorper neque."
    },
    {
      nombre: "Fabiola Demitropulos",
      especialidad: "todas tambien",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum velit at turpis ornare ullamcorper. In vulputate, purus sit amet hendrerit semper, tellus risus imperdiet mi, ac pellentesque urna ipsum nec nisl. Ut pretium mauris erat, eu sollicitudin lacus rutrum quis. Cras ullamcorper lacus nec risus hendrerit tincidunt. Pellentesque in iaculis lorem. Ut quis urna maximus, congue sem facilisis, luctus massa. Etiam et elit tempus ex gravida ultrices quis in mauris. Sed ut mauris sit amet velit lobortis hendrerit. Etiam euismod, felis vitae lobortis venenatis, odio metus consectetur velit, et consectetur purus orci eget purus. Morbi fermentum sagittis lorem eget facilisis. Morbi metus est, consectetur vitae risus vitae, dapibus rhoncus velit. Nunc dignissim ut risus ac consequat. Duis vel metus non diam laoreet accumsan ut non sem. Nam non pharetra augue, sed ullamcorper neque."
    },
    {
      nombre: "Fabiola Demitropulos",
      especialidad: "todas tambien",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum velit at turpis ornare ullamcorper. In vulputate, purus sit amet hendrerit semper, tellus risus imperdiet mi, ac pellentesque urna ipsum nec nisl. Ut pretium mauris erat, eu sollicitudin lacus rutrum quis. Cras ullamcorper lacus nec risus hendrerit tincidunt. Pellentesque in iaculis lorem. Ut quis urna maximus, congue sem facilisis, luctus massa. Etiam et elit tempus ex gravida ultrices quis in mauris. Sed ut mauris sit amet velit lobortis hendrerit. Etiam euismod, felis vitae lobortis venenatis, odio metus consectetur velit, et consectetur purus orci eget purus. Morbi fermentum sagittis lorem eget facilisis. Morbi metus est, consectetur vitae risus vitae, dapibus rhoncus velit. Nunc dignissim ut risus ac consequat. Duis vel metus non diam laoreet accumsan ut non sem. Nam non pharetra augue, sed ullamcorper neque."
    },
    {
      nombre: "Fabiola Demitropulos",
      especialidad: "todas tambien",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum velit at turpis ornare ullamcorper. In vulputate, purus sit amet hendrerit semper, tellus risus imperdiet mi, ac pellentesque urna ipsum nec nisl. Ut pretium mauris erat, eu sollicitudin lacus rutrum quis. Cras ullamcorper lacus nec risus hendrerit tincidunt. Pellentesque in iaculis lorem. Ut quis urna maximus, congue sem facilisis, luctus massa. Etiam et elit tempus ex gravida ultrices quis in mauris. Sed ut mauris sit amet velit lobortis hendrerit. Etiam euismod, felis vitae lobortis venenatis, odio metus consectetur velit, et consectetur purus orci eget purus. Morbi fermentum sagittis lorem eget facilisis. Morbi metus est, consectetur vitae risus vitae, dapibus rhoncus velit. Nunc dignissim ut risus ac consequat. Duis vel metus non diam laoreet accumsan ut non sem. Nam non pharetra augue, sed ullamcorper neque."
    },
    {
      nombre: "Fabiola Demitropulos",
      especialidad: "todas tambien",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum velit at turpis ornare ullamcorper. In vulputate, purus sit amet hendrerit semper, tellus risus imperdiet mi, ac pellentesque urna ipsum nec nisl. Ut pretium mauris erat, eu sollicitudin lacus rutrum quis. Cras ullamcorper lacus nec risus hendrerit tincidunt. Pellentesque in iaculis lorem. Ut quis urna maximus, congue sem facilisis, luctus massa. Etiam et elit tempus ex gravida ultrices quis in mauris. Sed ut mauris sit amet velit lobortis hendrerit. Etiam euismod, felis vitae lobortis venenatis, odio metus consectetur velit, et consectetur purus orci eget purus. Morbi fermentum sagittis lorem eget facilisis. Morbi metus est, consectetur vitae risus vitae, dapibus rhoncus velit. Nunc dignissim ut risus ac consequat. Duis vel metus non diam laoreet accumsan ut non sem. Nam non pharetra augue, sed ullamcorper neque."
    },
    {
      nombre: "Fabiola Demitropulos",
      especialidad: "todas tambien",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum velit at turpis ornare ullamcorper. In vulputate, purus sit amet hendrerit semper, tellus risus imperdiet mi, ac pellentesque urna ipsum nec nisl. Ut pretium mauris erat, eu sollicitudin lacus rutrum quis. Cras ullamcorper lacus nec risus hendrerit tincidunt. Pellentesque in iaculis lorem. Ut quis urna maximus, congue sem facilisis, luctus massa. Etiam et elit tempus ex gravida ultrices quis in mauris. Sed ut mauris sit amet velit lobortis hendrerit. Etiam euismod, felis vitae lobortis venenatis, odio metus consectetur velit, et consectetur purus orci eget purus. Morbi fermentum sagittis lorem eget facilisis. Morbi metus est, consectetur vitae risus vitae, dapibus rhoncus velit. Nunc dignissim ut risus ac consequat. Duis vel metus non diam laoreet accumsan ut non sem. Nam non pharetra augue, sed ullamcorper neque."
    },
    {
      nombre: "Fabiola Demitropulos",
      especialidad: "todas tambien",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum velit at turpis ornare ullamcorper. In vulputate, purus sit amet hendrerit semper, tellus risus imperdiet mi, ac pellentesque urna ipsum nec nisl. Ut pretium mauris erat, eu sollicitudin lacus rutrum quis. Cras ullamcorper lacus nec risus hendrerit tincidunt. Pellentesque in iaculis lorem. Ut quis urna maximus, congue sem facilisis, luctus massa. Etiam et elit tempus ex gravida ultrices quis in mauris. Sed ut mauris sit amet velit lobortis hendrerit. Etiam euismod, felis vitae lobortis venenatis, odio metus consectetur velit, et consectetur purus orci eget purus. Morbi fermentum sagittis lorem eget facilisis. Morbi metus est, consectetur vitae risus vitae, dapibus rhoncus velit. Nunc dignissim ut risus ac consequat. Duis vel metus non diam laoreet accumsan ut non sem. Nam non pharetra augue, sed ullamcorper neque."
    },
    {
      nombre: "Fabiola Demitropulos",
      especialidad: "todas tambien",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum velit at turpis ornare ullamcorper. In vulputate, purus sit amet hendrerit semper, tellus risus imperdiet mi, ac pellentesque urna ipsum nec nisl. Ut pretium mauris erat, eu sollicitudin lacus rutrum quis. Cras ullamcorper lacus nec risus hendrerit tincidunt. Pellentesque in iaculis lorem. Ut quis urna maximus, congue sem facilisis, luctus massa. Etiam et elit tempus ex gravida ultrices quis in mauris. Sed ut mauris sit amet velit lobortis hendrerit. Etiam euismod, felis vitae lobortis venenatis, odio metus consectetur velit, et consectetur purus orci eget purus. Morbi fermentum sagittis lorem eget facilisis. Morbi metus est, consectetur vitae risus vitae, dapibus rhoncus velit. Nunc dignissim ut risus ac consequat. Duis vel metus non diam laoreet accumsan ut non sem. Nam non pharetra augue, sed ullamcorper neque."
    },
    {
      nombre: "Fabiola Demitropulos",
      especialidad: "todas tambien",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum velit at turpis ornare ullamcorper. In vulputate, purus sit amet hendrerit semper, tellus risus imperdiet mi, ac pellentesque urna ipsum nec nisl. Ut pretium mauris erat, eu sollicitudin lacus rutrum quis. Cras ullamcorper lacus nec risus hendrerit tincidunt. Pellentesque in iaculis lorem. Ut quis urna maximus, congue sem facilisis, luctus massa. Etiam et elit tempus ex gravida ultrices quis in mauris. Sed ut mauris sit amet velit lobortis hendrerit. Etiam euismod, felis vitae lobortis venenatis, odio metus consectetur velit, et consectetur purus orci eget purus. Morbi fermentum sagittis lorem eget facilisis. Morbi metus est, consectetur vitae risus vitae, dapibus rhoncus velit. Nunc dignissim ut risus ac consequat. Duis vel metus non diam laoreet accumsan ut non sem. Nam non pharetra augue, sed ullamcorper neque."
    },
    {
      nombre: "Fabiola Demitropulos",
      especialidad: "todas tambien",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum velit at turpis ornare ullamcorper. In vulputate, purus sit amet hendrerit semper, tellus risus imperdiet mi, ac pellentesque urna ipsum nec nisl. Ut pretium mauris erat, eu sollicitudin lacus rutrum quis. Cras ullamcorper lacus nec risus hendrerit tincidunt. Pellentesque in iaculis lorem. Ut quis urna maximus, congue sem facilisis, luctus massa. Etiam et elit tempus ex gravida ultrices quis in mauris. Sed ut mauris sit amet velit lobortis hendrerit. Etiam euismod, felis vitae lobortis venenatis, odio metus consectetur velit, et consectetur purus orci eget purus. Morbi fermentum sagittis lorem eget facilisis. Morbi metus est, consectetur vitae risus vitae, dapibus rhoncus velit. Nunc dignissim ut risus ac consequat. Duis vel metus non diam laoreet accumsan ut non sem. Nam non pharetra augue, sed ullamcorper neque."
    },
    {
      nombre: "Fabiola Demitropulos",
      especialidad: "todas tambien",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum velit at turpis ornare ullamcorper. In vulputate, purus sit amet hendrerit semper, tellus risus imperdiet mi, ac pellentesque urna ipsum nec nisl. Ut pretium mauris erat, eu sollicitudin lacus rutrum quis. Cras ullamcorper lacus nec risus hendrerit tincidunt. Pellentesque in iaculis lorem. Ut quis urna maximus, congue sem facilisis, luctus massa. Etiam et elit tempus ex gravida ultrices quis in mauris. Sed ut mauris sit amet velit lobortis hendrerit. Etiam euismod, felis vitae lobortis venenatis, odio metus consectetur velit, et consectetur purus orci eget purus. Morbi fermentum sagittis lorem eget facilisis. Morbi metus est, consectetur vitae risus vitae, dapibus rhoncus velit. Nunc dignissim ut risus ac consequat. Duis vel metus non diam laoreet accumsan ut non sem. Nam non pharetra augue, sed ullamcorper neque."
    },
    {
      nombre: "Fabiola Demitropulos",
      especialidad: "todas tambien",
      descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum velit at turpis ornare ullamcorper. In vulputate, purus sit amet hendrerit semper, tellus risus imperdiet mi, ac pellentesque urna ipsum nec nisl. Ut pretium mauris erat, eu sollicitudin lacus rutrum quis. Cras ullamcorper lacus nec risus hendrerit tincidunt. Pellentesque in iaculis lorem. Ut quis urna maximus, congue sem facilisis, luctus massa. Etiam et elit tempus ex gravida ultrices quis in mauris. Sed ut mauris sit amet velit lobortis hendrerit. Etiam euismod, felis vitae lobortis venenatis, odio metus consectetur velit, et consectetur purus orci eget purus. Morbi fermentum sagittis lorem eget facilisis. Morbi metus est, consectetur vitae risus vitae, dapibus rhoncus velit. Nunc dignissim ut risus ac consequat. Duis vel metus non diam laoreet accumsan ut non sem. Nam non pharetra augue, sed ullamcorper neque."
    }
  ]
  constructor() {
    console.log(this.speakers);
  }

  /**
   * ObtenerSpeaker
   */
  public getSpeakers():Speaker[]{
    return this.speakers;
  }

  
}
export interface Speaker{
  nombre: string;
  especialidad: string;
  descripcion: string;
};