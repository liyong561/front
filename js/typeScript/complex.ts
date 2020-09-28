export function genFormObjFromItems(items: DetailSectionItem[], fb: FormBuilder = null) {
    return items.reduce((pv, cv) => {
      return {
        ...pv,
        // 无参数的立即执行函数
        ...(() => {
          let item = {
            [cv.field]: [cv.defaultValue ? cv.defaultValue : '', (() => {
              return cv.required ? [Validators.required] : []
            })()]
          };
          if (['search_select_single', 'search_select'].indexOf(cv.control) >= 0) {
            item = {
              ...item,
              [cv.control_search_select_labels_field]: []
            }
          }
          if (['location_select'].indexOf(cv.control) >= 0) {
            item = {
              ...item,
              [cv.location_lon_field]: [],
              [cv.location_lat_field]: [],
            }
          }
          if (cv.control === 'editable_table') {
            item = {
              ...item,
              [cv.field]: fb ? fb.array([]) : undefined as any,
            }
          }
          if (cv.control === 'two_number') {
              // 都是对item进行了修改
            item = {
              ...item,
              // 这个方括号加在变量上，是什么意思？
              [cv.two_number_1.field]: [],
              [cv.two_number_2.field]: [],
            }
          }
          if (cv.control === 'date_range') {
            item = {
              ...item,
              [cv.dateRangeStartDtField]: [],
              [cv.dateRangeEndDtField]: [],
            }
          }
          // 立即执行函数的返回值
          return item;
        })()
      }
      // reduce的使用，初始参数
    }, {});
  }