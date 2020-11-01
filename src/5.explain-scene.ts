export type Place = 'home' | 'office';
export type Action = 'greeting' | 'disagreement';
 
export type Scene = {
    place: Place,
    person1: string,
    person2: string,
    action: Action,
};

/*
    There are many ways to express and implement this efficiently.
    Give it a go!
*/
export function explain(scene: Scene): string {
    if (scene.action === 'disagreement') {
        let disagreement: string;

        switch (scene.place) {
            case 'home': 
                disagreement = `${scene.person1} shouts to ${scene.person2}: I hate you!`;
                break;
            case 'office':
                disagreement = `${scene.person1} addresses ${scene.person2}: I beg to differ`;
                break;
        }     
        
        return disagreement;
    } 
    
    if (scene.action === 'greeting') {
        let greeting: string;

        switch (scene.place) {
            case 'home':
                greeting = `${scene.person1} gives ${scene.person2} a bear hug`;
                break;
            case 'office':
                greeting = `${scene.person1} shares a firm hand-shake with ${scene.person2}`;
                break;
        }

        return greeting;
    }

    return null;
}

/*
    One can use tester-doer or maps here
*/
type DescriptionMaker = { action: Action, place: Place, description: (scene: Scene) => string }
const descriptionMakers: DescriptionMaker[] = [ 
  {
      action: 'disagreement',
      place: 'office',
      description: (scene: Scene) => `${scene.person1} addresses ${scene.person2}: I beg to differ`
  },      
  {
      action: 'disagreement',
      place: 'home',
      description: (scene: Scene) => `${scene.person1} shouts to ${scene.person2}: I hate you!`
  },      
  {
      action: 'greeting',
      place: 'office',
      description: (scene: Scene) => `${scene.person1} shares a firm hand-shake with ${scene.person2}`
  },      
  {
      action: 'greeting',
      place: 'home',
      description: (scene: Scene) => `${scene.person1} gives ${scene.person2} a bear hug`
  },      
];

export function explain1(scene: Scene): string {
    return descriptionMakers
            .find(m => m.action === scene.action && m.place === scene.place)
            .description(scene);

    /*
     it's more readable but less writeable, 
     but try this out below, and challenge is to support both ways of indexing!
     
     return descriptionMakers[scene.action][scene.place](scene);
     // or,
     return descriptionMakers[scene.place][scene.action](scene);
    */
}