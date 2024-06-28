import type { InjectionKey, ExtractPropTypes } from 'vue'

import type { ButtonProps } from '../Button/button'
import { buttonProps } from "../Button/button"

export interface ButtonGroupContext {
    size?: ButtonProps['size']
    type?: ButtonProps['type'],
    danger?: ButtonProps['danger'],
}

export const buttonGroupContextKey: InjectionKey<ButtonGroupContext> = Symbol(
    'buttonGroupContextKey'
)


export const buttonGroupProps = {
    /**
     * @description 控制按钮组按钮的尺寸
     */
    size: buttonProps.size,
    /**
     * @description 控制按钮组按钮的类型
     */
    type: buttonProps.type,
    /**
     * @description 控制按钮组按钮的类型
     */
    danger: buttonProps.danger,
} as const
export type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>