import { BackgroundColors, backgroundColors, Effects, effects, FontColors, Color, fontColors, Reset } from './model';
function addColor(text: string, color: Color, isBackground = false): string {
    if (isBackground) {
        return text + backgroundColors[color];
    }
    return text + fontColors[color];
}
function getEffects(effectList: Array<Effects>): string {
    return effectList.map(effect => effects[effect]).join('');
}
export type ColorOptions = {
    font?: FontColors;
    background?: BackgroundColors;
    effects?: Array<Effects>;
};
export function color(text: string, options?: ColorOptions): string {
    const preparedText = text.replace(/ё/g, 'е');
    let result = '';
    if (options) {
        if (options.font) {
            result = addColor(result, options.font);
        }
        if (options.background) {
            result = addColor(result, options.background, true);
        }
        if (options.effects) {
            result += getEffects(options.effects);
        }
        result += preparedText;
        result += Reset;
        return result;
    }
    return preparedText;
}
