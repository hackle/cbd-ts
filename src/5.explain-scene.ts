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