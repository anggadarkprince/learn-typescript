// generic array
const names: Array<string> = ['Angga', 'Ari'];
names[0].split(' ');

// generic promise
// @ts-ignore
const promise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('Process is completed')
    }, 200)
})

promise.then(data => {
    data.split(' ');
});


// Partial<T>
interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}
function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {}; // generic utility to prevent error, we tell we complete it later
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;

    return courseGoal as CourseGoal; // needed to satisfy the return type
}

// Readonly<T>
const myNames: Readonly<string[]> = ['Angga', 'Ari'];
//myNames.push('Wijaya'); // cannot modify