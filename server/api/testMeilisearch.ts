export default defineEventHandler(async (event) => {
    return await $meilisearch.index('FakeIndex').getDocuments({
        limit: 50
    })
})
