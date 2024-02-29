import { SnakeConditionEnum, SnakeDirectionEnum } from './snake.enum'

export interface BodyType {
    x: number
    y: number
}

export interface SnakeType {
    body: BodyType[]
    direction: SnakeDirectionEnum
    fruit: BodyType
    condition: SnakeConditionEnum
    count: number
}
