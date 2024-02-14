export const getTopCoders = async () => {
    const topCoders = await fetch(
        `${import.meta.env.VITE_BASE_URL}/users?rolId=3&_sort=-amount&_limit=3`
    ).then((res) => res.json());

    return {
        top1: topCoders[0],
        top2: topCoders[1],
        top3: topCoders[2],
    };
};
