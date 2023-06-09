/* eslint-disable no-param-reassign */

import data from './output.json';

interface IObject {
  name?: any;
  children?: any;
  data?: any;
}

// const temp = data.nodes.map((n) => n.source.split('/'));
// const result: any[] = [];
// const final = { result };

const generateTemp = (data: any, temp: any[], final: any) => {
  temp.forEach((a: any) => {
    a.reduce((r: any, name: any, i: any, arr: any) => {
      if (!r[name]) {
        const obj: IObject = { name };
        r[name] = { result: [] };
        if (arr[i + 1] && name != null) {
          obj.children = r[name].result;
        }

        if (name.includes('.')) {
          const otherChild = data.edges.filter(
            (e: any) => e.from === arr.join('/')
          );

          obj.children = otherChild.map((oC: any) => ({
            name: oC.to,
            data: data.nodes.find((n: any) => n.source === oC.to),
          }));
        }

        if (obj.name.includes('.')) {
          obj.name = arr.join('/');
          obj.data = data.nodes.find(
            (item: any) =>
              item.source.split('/')[item.source.split('/').length - 1] ===
              obj.name
          );
        }

        r.result.push(obj);
      }

      return r[name];
    }, final);
  });
};
// generateTemp(data);

const arr = new Map();
const convertToReactFlowFormat = (treeNode: any, arr: any) => {
  if (treeNode.name.includes('.')) {
    if (treeNode.children && treeNode.children.length > 0) {
      arr.set(treeNode.name, {
        id: treeNode.name,
        data: {
          label: treeNode.name,
          ...data.nodes.find((item) => item.source === treeNode.name),
        },
        children: treeNode.children,
        position: {
          x: 0,
          y: 0,
        },
        type: 'selectorNode',
      });
    } else {
      arr.set(treeNode.name, {
        id: treeNode.name,
        data: {
          label: treeNode.name,
          ...data.nodes.find((item) => item.source === treeNode.name),
        },
        position: {
          x: 0,
          y: 0,
        },
        type: 'selectorNode',
      });
    }
  } else {
    arr.set(treeNode.name, {
      id: treeNode.name,
      position: {
        x: 0,
        y: 0,
      },
      data: {
        label: treeNode.name,
      },
      type: 'selectorNode',
      children: treeNode.children,
      className: `reactflow_node_${treeNode.name}`,
    });
    treeNode.children.forEach((node: any) => {
      convertToReactFlowFormat(node, arr);
    });
  }
};
//  const explorer = result;
// convertToReactFlowFormat(result[0], arr);

const generateInitialNodes = (result: any) => {
  return result.map((item: any, index: any) => ({
    id: item.name,
    position: {
      x: 0,
      y: index * 20,
    },
    type: 'selectorNode',
    data: !item.name.includes('.')
      ? {
          label: item.name,
          children: item.children ? item.children : undefined,
          depth: 0,
        }
      : {
          label: item.name,
          children: item.children ? item.children : undefined,
          ...data.nodes.find((n: any) => n.id === item.name),
          depth: 0,
        },
    style: {
      border: '1px solid black',
      borderRadius: '8px',
    },
  }));
};

const generateInitialEdges = (result: any[], data: any) => {
  return result
    .filter(
      (item: any) =>
        data.edges.find((e: any) => e.from === item.name) !== undefined
    )
    .map((item: any) => ({
      id: `${item.from}-${item.to}`,
      source: item.from,
      target: item.to,
    }));
};

//  const initialNodes: any[] = result.map((item, index) => ({
//   id: item.name,
//   position: {
//     x: 0,
//     y: index * 20,
//   },
//   type: 'selectorNode',
//   data: !item.name.includes('.')
//     ? {
//         label: item.name,
//         children: item.children ? item.children : undefined,
//         depth: 0,
//       }
//     : {
//         label: item.name,
//         children: item.children ? item.children : undefined,
//         ...data.nodes.find((n: any) => n.id === item.name),
//         depth: 0,
//       },
//   style: {
//     border: '1px solid black',
//     borderRadius: '8px',
//   },
// }));

//  const initialEdges = result
//   .filter((item) => data.edges.find((e) => e.from === item.name) !== undefined)
//   .map((item) => ({
//     id: `${item.from}-${item.to}`,
//     source: item.from,
//     target: item.to,
//   }));
