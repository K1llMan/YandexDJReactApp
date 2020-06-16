/**
 * Формирует строку со списком непустых классов
 * @param names Массив имен классов
 */
export function combineClassNames(names: string[]) {
    return names
        .filter((v: string) => v != null && v.trim() != '')
        .join(' ');
}