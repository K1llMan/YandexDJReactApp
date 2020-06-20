/**
 * Формирование обработчика усиления звука
 * @param sourceElement Источник звука
 */
export function getGainController(sourceElement: HTMLMediaElement) {
    sourceElement.crossOrigin = 'anonymous';

    let context = new window.AudioContext();

    // Узел усиления
    let gainNode = context.createGain();
    gainNode.gain.value = 1;

    let source = context.createMediaElementSource(sourceElement);
    source.connect(gainNode);
    gainNode.connect(context.destination);

    // Шкала на 60 Дб, усиление +/- 12
    return (gain: number) => {
        gainNode.gain.value = 1 + 0.5 * (gain / 12);
    };
}