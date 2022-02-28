import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import StyleGuide from '../StyleGuide';

const Brasser = (props) => {
  return (
    <Svg
      width={props.width}
      height={props.height}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='m28.206 22.558.142.257-.317 1.562a11.77 11.77 0 0 1-1.534 3.912 11.411 11.411 0 0 1-1.667 2.034l-.25.24a12.018 12.018 0 0 1-3.084 2.076 12.046 12.046 0 0 1-3.076-2.043l-.25-.24a11.548 11.548 0 0 1-3.209-5.946l-.316-1.562.141-.256c.234-.414.459-.827.675-1.257.075-.157.159-.306.233-.455.259-.537.517-1.083.75-1.654l.043.05.2.182c.283.273.575.529.883.777.117.1.242.19.367.281.267.212.545.411.834.595l.374.232c.417.25.848.473 1.293.67l.675.297c.224.091.475.091.7 0l.683-.297c.441-.199.87-.422 1.284-.67.133-.075.258-.157.383-.24.284-.182.567-.372.834-.579l.383-.29c.292-.239.567-.487.833-.744.075-.074.159-.14.233-.223h.001a.111.111 0 0 0 0-.041 29.779 29.779 0 0 0 .976 2.084c.316.405.55.835.783 1.248Zm-1.625-6.144a9.893 9.893 0 0 1-.45.637 11.257 11.257 0 0 1-4.302 3.366l-.333.14-.325-.14a11.196 11.196 0 0 1-4.776-4.02l-.05-.082a10.9 10.9 0 0 1-1.792-5.697c3.734-3.755 5.835-6.946 6.943-10.403 1.076 3.456 3.21 6.615 6.944 10.403a10.869 10.869 0 0 1-1.86 5.796ZM16.028.604A22.16 22.16 0 0 1 19.746 0c-1.05 3.15-3.101 6.103-6.669 9.659l-2.608 2.29a17.527 17.527 0 0 1-5.385 3.258c-1.005.38-2.043.67-3.1.869-.656.124-1.318.21-1.984.256A21.956 21.956 0 0 1 5.849 6.296 22.216 22.216 0 0 1 16.029.604ZM6.151 30.422l-.3-.653a32.12 32.12 0 0 1-2.817-12.147c.217-.05.433-.116.642-.174.208-.058.316-.082.474-.082a22.46 22.46 0 0 0 1.55-.505h.001a19.323 19.323 0 0 0 5.918-3.63l1.309-1.15c.269 1.86.946 3.639 1.983 5.21l.05.074.225.323-.075.19a37.688 37.688 0 0 1-.908 2.06l-.109.206c-.35.711-.725 1.414-1.125 2.1-.1.175-.2.34-.316.513a32.293 32.293 0 0 1-5.368 6.615c-.225.224-.45.439-.692.654l-.442.396Zm5.835 7.89a17.84 17.84 0 0 1-2.017-3.63 18.541 18.541 0 0 1-1.184-4.367c.425-.413.833-.827 1.242-1.273l.092-.108c.425-.463.833-.934 1.242-1.422l.4-.505c.291-.372.591-.76.875-1.149l.391-.554.25-.348c0 .141.067.273.109.414.041.14.058.264.1.397.041.132.116.364.175.545.058.182.074.248.116.364.042.116.15.38.233.571.084.19.084.215.134.314.1.232.208.447.325.67 0 .058.058.124.091.19.15.281.317.554.484.827l.125.182.417.604.224.28.375.464c.092.108.192.207.284.306.091.1.192.223.3.323-.1.248-.2.48-.309.72-.108.239-.166.404-.266.603-.1.198-.284.529-.425.827-.142.297-.2.388-.317.578-.117.19-.325.497-.492.745l-.367.554c-.242.322-.5.637-.759.95-.074.083-.141.182-.216.265-.267.314-.567.645-.9.976l-.732.686ZM21.496 43a14.873 14.873 0 0 1-6.126-5.706c.175-.215.333-.43.5-.653l.25-.323c.3-.43.592-.827.833-1.315.067-.099.117-.199.175-.298.2-.355.4-.727.584-1.1.083-.156.15-.313.225-.47l.224-.472.092.066c.375.281.767.546 1.159.827l.341.199c.446.256.905.488 1.376.694.22.089.464.089.684 0 .469-.205.925-.436 1.367-.694l.35-.207c.383-.232.759-.48 1.117-.745l.133-.099.225.472.225.48c.183.364.375.719.575 1.066.058.108.117.224.183.331.267.439.55.877.834 1.299.083.115.175.223.266.339.092.115.317.438.492.645A14.728 14.728 0 0 1 21.497 43Zm11.494-8.27a18.092 18.092 0 0 1-2.017 3.631l-.734-.728c-.333-.33-.633-.661-.908-.984a39.935 39.935 0 0 1-.975-1.224 5.503 5.503 0 0 1-.284-.43c-.2-.28-.391-.562-.566-.826-.175-.265-.2-.364-.3-.538-.1-.173-.309-.545-.442-.827-.134-.28-.175-.405-.267-.603a23.125 23.125 0 0 1-.308-.711l.208-.223.15-.15c.142-.165.292-.33.442-.52v-.001c.334-.408.643-.836.925-1.282.091-.148.167-.306.258-.454.175-.306.359-.613.509-.935.091-.19.158-.389.241-.579.084-.19.259-.587.359-.893.1-.306.117-.422.184-.637.066-.215.158-.512.216-.777l.25.347.4.562c.284.38.567.761.834 1.125l.416.529c.375.455.767.91 1.167 1.348l.167.182c.4.43.833.827 1.234 1.265a18.529 18.529 0 0 1-1.16 4.284v.05Zm4.167-4.96-.3.669-.441-.389a17.79 17.79 0 0 1-.709-.67 32.355 32.355 0 0 1-5.36-6.615 7.503 7.503 0 0 1-.316-.529c-.4-.67-.767-1.364-1.117-2.067l-.108-.223a29.968 29.968 0 0 1-.909-2.051l-.075-.19.225-.323a12.654 12.654 0 0 0 2.034-5.284l1.292 1.133c.317.28.642.554.975.826l.35.257.683.48.434.28c.208.133.416.265.634.389l.483.265c.209.115.417.23.625.33l.525.248c.2.091.408.19.626.273.216.083.358.15.541.223l.634.232.566.182.65.19.568.14.291.083a32.131 32.131 0 0 1-2.817 12.14h.017Zm3.868-13.686a17.654 17.654 0 0 1-8.485-4.134l-2.6-2.291C26.362 6.103 24.312 3.151 23.27 0a22.298 22.298 0 0 1 12.487 5.048A22.01 22.01 0 0 1 43 16.332a15.845 15.845 0 0 1-1.992-.264l.017.016Z'
        fill='#435E75'
      />
    </Svg>
  );
};

export default Brasser;
