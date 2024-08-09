export const delay = (timeInMS: number): Promise<any> => {
    return new Promise(resolve => setTimeout(resolve, timeInMS));
};