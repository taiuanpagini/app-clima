import { ReactNode } from "react";

export type DailyWeatherProps = {
    icon?: string;
    city?: string;
    forecast?: string;
    weather?: string;
    max?: string;
    min?: string;
    sunrise?: string;
    sunset?: string;
    wind?: string;
    moisture?: string;
    sea?: string;
    pressure?: string;
    retryLocation?: any
}