let interests = document.querySelectorAll('.interest__check');


interests.forEach(elem => {

    elem.addEventListener('change', () => {

        let childInterests = elem.closest('.interests_active');

        let childLi = elem.closest('.interest');

        //если дочерние элементы не найдены
        if (childInterests === null) {


            let ul = childLi.querySelector('.interests_active')

            let ulLi = ul.querySelectorAll('.interest__check')

            ulLi.forEach(elemLi => {
                elemLi.checked = elem.checked;
            })

        } else {
            let childChecks = childInterests.closest('.interest')

            //родительская лишка
            let inputChecks = childChecks.querySelector('.interest__check')

            let childItem = elem.closest('.interests_active').querySelectorAll('input')
            let activeBox = true;


            childItem.forEach(item => {

                if (!item.checked) {
                    console.log('hi')
                    activeBox = false;

                }
            })

            inputChecks.checked = activeBox;

        }

    })

})
