import { api } from '@/redux/api/apiSlice';

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products',
    }),
    singleProduct: builder.query({
      query: (id) => `/product/${id}`,
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/comment/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['comments'],
    }),
    getComments: builder.query({
      query: (id) => ({
        url: `/comment/${id}`,
        method: 'GET',
      }),
      providesTags: ['comments'],
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useGetProductsQuery,
  usePostCommentMutation,
  useSingleProductQuery,
} = productApi;
