export function ClassList(...args: (string | null | undefined)[]): string {
    return args.filter(x => x && typeof x === 'string' && x !== '' && x !== ' ').join(' ');
}